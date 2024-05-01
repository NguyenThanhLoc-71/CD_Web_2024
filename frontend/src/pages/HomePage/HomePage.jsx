import React, { useEffect, useState } from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperTypeProduct } from "./style";
import slide1 from '../../assets/images/slide1.jpg'
import slide2 from '../../assets/images/slide2.jpg'
import slide3 from '../../assets/images/slide3.jpg'
import SlideComponent from "../../components/SlideComponent/SlideComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";


const HomePage = () => {
    const arr = ['Truyện tranh', 'Sách giáo khoa', 'Sách ngoại ngữ']

    const [productTypes, setProductTypes] = useState([]);
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch("/api/home") // Gửi yêu cầu tới endpoint trong Spring Boot
            .then((response) => response.json()) // Chuyển đổi phản hồi thành JSON
            .then((data) => {
                setProduct(data.products); // Cập nhật state với dữ liệu loại sản phẩm
                setProductTypes(data.productTypes);
            })
            .catch((error) => console.error("Có lỗi xảy ra:", error)); // Xử lý lỗi nếu có
    }, []); // Chạy hiệu ứng chỉ một lần khi component được gắn vào


    return (
        <>
            <div style={{ padding: '0 120px' }}>
                <WrapperTypeProduct>

                    {productTypes && productTypes.length > 0 ? ( // Kiểm tra trước khi gọi map
                        productTypes.map((type) => (
                            <TypeProduct name={type.name} key={type.id} />
                        ))
                    ) : (
                        <p>Không có loại sản phẩm nào được tìm thấy.</p> // Thông báo khi không có dữ liệu
                    )}

                </WrapperTypeProduct>
            </div>
            <div id="container" style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px', width: '100%' }}>
                <SlideComponent arrImages={[slide1, slide2, slide3]} />
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
                   
                    {products.map((product) => (
                        <CardComponent key={product.id} product={product} /> // Truyền sản phẩm qua props
                    ))}
                
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
                        border: '1px solid rgb(11,116,229)', color: 'rgb(11,116,229)',
                        width: '240px', height: '38px', borderRadius: '4px'
                    }}
                        styleTextButton={{ fontWeight: 500 }} />
                </div>
            </div>
        </>

    )
}

export default HomePage