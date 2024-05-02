import { Button, Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { WrapperStyleImageSmall, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperPriceProduct, WrapperPriceTextProduct, WrapperAddressProduct, WrapperQualityProduct, WrapperInputNumber } from "./style";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useParams } from "react-router-dom";

const ProductDetailComponent = () => {
    const { productId } = useParams(); // Lấy productId từ tham số
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`/api/products/${productId}`) // Lấy thông tin chi tiết sản phẩm từ backend
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error("Có lỗi xảy ra:", error));
    }, [productId]); // Chỉ chạy khi productId thay đổi

    if (!product) {
        return <div>Loading...</div>; // Hiển thị khi dữ liệu chưa tải xong
    }

    const onChange = () => { }
    return (
        <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px' }}>
            <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
                <Image src={product.image} alt="product.name" preview={false} />
                <Row style={{ padding: '10px', justifyContent: 'space-between' }}>
                    <WrapperStyleColImage span={6}>
                        <WrapperStyleImageSmall src={product.image} alt="product.name" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={6}>
                        <WrapperStyleImageSmall src={product.image} alt="product.name" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={6}>
                        <WrapperStyleImageSmall src={product.image} alt="product.name" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={6}>
                        <WrapperStyleImageSmall src={product.image} alt="product.name" preview={false} />
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{ paddingLeft: '6px' }}>
                <WrapperStyleNameProduct>{product.name}</WrapperStyleNameProduct>
                <div>
                    <span style={{marginRight:'5px'}}>{product.rating}</span>
                    <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                    <WrapperStyleTextSell>  | Đã bán {product.sold}+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>
                        {product.price} đ
                    </WrapperPriceTextProduct>
                </WrapperPriceProduct>

                <WrapperAddressProduct>
                    <span> Giao đến </span>
                    <span className="address"> Q.Thủ Đức - TP.HCM  </span>
                    <span className="change-address"> Đổi địa chỉ</span>
                </WrapperAddressProduct>



                <div style={{ margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
                    <div style={{ marginBottom: '12px' }}>Số lượng</div>
                    <WrapperQualityProduct>
                        <button style={{ border: 'none', background: 'transparent' }}>
                            <MinusOutlined style={{ color: '#000', fontSize: '20px' }} size="10" />
                        </button>

                        <WrapperInputNumber defaultValue={3} onChange={onChange} size="small" />

                        <button style={{ border: 'none', background: 'transparent' }}>
                            <PlusOutlined style={{ color: '#000', fontSize: '20px' }} size="10" />
                        </button>
                    </WrapperQualityProduct>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: 'rgb(255,57,69) ',
                            height: '48px',
                            width: '220px',
                            border: 'none',
                            borderRadius: '4px',
                        }}
                        textButton={'Chọn mua'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                    >
                    </ButtonComponent>

                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: '#fff ',
                            height: '48px',
                            width: '220px',
                            border: 'solid 1px',
                            borderRadius: '4px',
                        }}
                        textButton={'Mua trả sau'}
                        styleTextButton={{ color: 'rgb(13,92,182) ', fontSize: '15px' }}
                    >
                    </ButtonComponent>
                </div>

            </Col>
        </Row>
    )
}

export default ProductDetailComponent