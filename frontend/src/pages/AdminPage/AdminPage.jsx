import React, { useEffect, useState } from "react";
import { Table, Button, Layout, Menu, Space, Modal, Form, Input, Select, Upload } from "antd";
import { UserOutlined, ShoppingCartOutlined, LaptopOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import './AdminPage.css';

const { Header, Sider, Content } = Layout;
const { Option } = Select;

const AdminPage = () => {
    const [products, setProducts] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        fetch("/api/products") // Update with your API endpoint
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.validateFields()
            .then(values => {
                form.resetFields();
                const productData = {
                    name: values.name,
                    categoryId: values.type, // Đổi type thành categoryId
                    price: values.price,
                    sold: values.sold,
                    image: values.image ? values.image[0].name : '', // Assuming single image upload
                    rating: values.rating,
                    discount: values.discount,
                };
                fetch('/api/products/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(productData)
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    setProducts([...products, data]); // Cập nhật danh sách sản phẩm
                    setIsModalVisible(false);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };
    

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Image',
            dataIndex: 'imageUrl',
            key: 'imageUrl',
            render: (text, record) => (
                <img src={record.imageUrl} alt={record.name} style={{ width: '50px' }} />
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary" icon={<EditOutlined />} />
                    <Button type="danger" icon={<DeleteOutlined />} />
                </Space>
            ),
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header className="header">
                <div className="logo">BOOK STORE</div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['2']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            Người dùng
                        </Menu.Item>
                        <Menu.Item key="2" icon={<LaptopOutlined />}>
                            Sản phẩm
                        </Menu.Item>
                        <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
                            Đơn hàng
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <div className="product-management">
                            <div className="add-product">
                                <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={showModal} />
                                <Button type="primary" style={{ marginLeft: '10px' }}>Export Excel</Button>
                            </div>
                            <Table dataSource={products} columns={columns} pagination={{ pageSize: 5 }} />
                        </div>
                    </Content>
                </Layout>
            </Layout>

            <Modal title="Tạo sản phẩm" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input the name of the product!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: 'Please select the type of the product!' }]}
        >
            <Select placeholder="Select a type">
                <Option value="1">Category 1</Option>
                <Option value="2">Category 2</Option>
                <Option value="3">Category 3</Option>
            </Select>
        </Form.Item>
        <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please input the price of the product!' }]}
        >
            <Input type="number" />
        </Form.Item>
        <Form.Item
            name="sold"
            label="Sold"
            rules={[{ required: true, message: 'Please input the sold count!' }]}
        >
            <Input type="number" />
        </Form.Item>
        <Form.Item
            name="image"
            label="Image"
            valuePropName="fileList"
            getValueFromEvent={e => Array.isArray(e) ? e : e && e.fileList}
            rules={[{ required: true, message: 'Please select an image!' }]}
        >
            <Upload name="image" listType="picture" beforeUpload={() => false}>
                <Button>Select File</Button>
            </Upload>
        </Form.Item>
        <Form.Item
            name="rating"
            label="Rating"
            rules={[{ required: true, message: 'Please input the rating of the product!' }]}
        >
            <Input type="number" />
        </Form.Item>
        <Form.Item
            name="discount"
            label="Discount"
            rules={[{ required: true, message: 'Please input the discount of the product!' }]}
        >
            <Input type="number" />
        </Form.Item>
    </Form>
</Modal>

        </Layout>
    );
};

export default AdminPage;
