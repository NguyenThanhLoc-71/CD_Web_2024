import React, { Fragment, useEffect, useState } from "react";
import NavBarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Pagination, Row, Col } from 'antd';
import { WrapperProducts, WrapperNavbar } from "./style";
import { useParams } from "react-router-dom"


const TypeProductPage = () => {

    const { categoryId } = useParams(); // Lấy categoryId từ tham số URL
    const [products, setProducts] = useState([]); // State cho danh sách sản phẩm
    const [categoryName, setCategoryName] = useState(""); // State cho tên danh mục


    useEffect(() => {
        fetch(`/api/categories/${categoryId}`) // Gửi yêu cầu HTTP
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products); // Cập nhật danh sách sản phẩm
                setCategoryName(data.categoryName); // Cập nhật tên danh mục
            })
            .catch((error) => console.error("Có lỗi xảy ra:", error)); // Xử lý lỗi
    }, [categoryId]); // Chạy khi categoryId thay đổi

    const onPageChange = (page) => {
        console.log("Page changed to:", page); // Xử lý sự kiện chuyển trang
    };

    return (
        <div style={{ padding: '0 120px', background: '#efefef' }}>
            <h2>{`Danh mục: ${categoryName}`}</h2>
            <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
                <WrapperNavbar span={4}>
                    {/* <NavBarComponent /> */}
                </WrapperNavbar>
                <Col span={20}>
                    <WrapperProducts>
                        {products && products.length > 0 ? (
                            products.map((product) => (
                                <CardComponent key={product.id} product={product} />
                            ))
                        ) : (
                            <p>Không có sản phẩm</p>
                        )}

                    </WrapperProducts>
                    <Pagination
                        defaultCurrent={1}
                        total={100}
                        onChange={onPageChange}
                        style={{ textAlign: 'center', marginTop: '10px' }} />
                </Col>
            </Row>
        </div>

    )
}

export default TypeProductPage