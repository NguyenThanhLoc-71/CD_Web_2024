import React, { Fragment, useEffect, useState } from "react";
import NavBarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Pagination, Row, Col } from 'antd';
import { WrapperProducts, WrapperNavbar } from "./style";
import { useParams } from "react-router-dom"


const TypeProductPage = () => {

    const { categoryId } = useParams(); // Lấy categoryId từ tham số URL
    const [products, setProducts] = useState([]); // State cho danh sách sản phẩm
    const [initialProducts, setInitialProducts] = useState([]);
    const [categoryName, setCategoryName] = useState(""); // State cho tên danh mục

    const updateProducts = (filteredProducts) => {
        setProducts(filteredProducts);
    };

    useEffect(() => {
        const fetchProducts = () => {
            fetch(`/api/categories/${categoryId}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log("Fetched data:", data);
                    if (data && Array.isArray(data.products)) {
                        setProducts(data.products);
                        setInitialProducts(data.products);
                        setCategoryName(data.categoryName);
                    } else {
                        console.error("Invalid data format:", data);
                        setProducts([]);
                        setInitialProducts([]);
                        setCategoryName("");
                    }
                })
                .catch((error) => console.error("Có lỗi xảy ra:", error));
        };

        fetchProducts();
    }, [categoryId]);

    const onPageChange = (page) => {
        console.log("Page changed to:", page);
        // Implement pagination logic if needed
    };



    return (
        <div style={{ padding: '0 120px', background: '#efefef' }}>
            <h2>{`Danh mục: ${categoryName}`}</h2>
            <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
                <WrapperNavbar span={4}>
                <NavBarComponent updateProducts={updateProducts} />
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