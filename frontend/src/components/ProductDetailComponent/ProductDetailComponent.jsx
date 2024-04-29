import { Button, Col, Image, Row } from "antd";
import React from "react";
import imageProduct from "../../assets/images/anh1.jpg";
import imageProductSmall from "../../assets/images/anh3.jpg";
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { WrapperStyleImageSmall, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperPriceProduct, WrapperPriceTextProduct, WrapperAddressProduct, WrapperQualityProduct, WrapperInputNumber } from "./style";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailComponent = () => {
    const onChange = () => { }
    return (
        <Row style={{ padding: '16px', background: '#fff',borderRadius:'4px' }}>
            <Col span={10} style={{borderRight:'1px solid #e5e5e5', paddingRight:'8px'}}>
                <Image src={imageProduct} alt="image product" preview={false} />
                <Row style={{ padding: '10px', justifyContent: 'space-between' }}>
                    <WrapperStyleColImage span={6}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={6}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={6}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={6}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{paddingLeft:'6px'}}>
                <WrapperStyleNameProduct>“Chém" Tiếng Anh Không Cần Động Não - Tặng Kèm Bộ Video Luyện Nghe-Nói + Sổ Học Từ Vựng</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                    <WrapperStyleTextSell>  | Đã bán 1000+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>
                        100.000đ
                    </WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span> Giao đến </span>
                    <span className="address"> Q.Thủ Đức - TP.HCM  </span>
                    <span className="change-address"> Đổi địa chỉ</span>
                </WrapperAddressProduct>



                <div style={{margin:'10px 0 20px',padding:'10px 0', borderTop: '1px solid #e5e5e5',borderBottom: '1px solid #e5e5e5'}}>
                    <div style={{marginBottom: '12px'}}>Số lượng</div>
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
                <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                    <ButtonComponent
                    bordered ={false}
                        size={40}
                        styleButton={{ 
                            background:'rgb(255,57,69) ',
                            height:'48px',
                            width:'220px',
                            border:'none',
                            borderRadius:'4px',
                        }}
                        textButton={'Chọn mua'}
                        styleTextButton={{ color: '#fff',fontSize:'15px', fontWeight:'700' }}
                    >
                    </ButtonComponent>

                    <ButtonComponent
                    bordered ={false}
                        size={40}
                        styleButton={{ 
                            background:'#fff ',
                            height:'48px',
                            width:'220px',
                            border:'solid 1px',
                            borderRadius:'4px',
                        }}
                        textButton={'Mua trả sau'}
                        styleTextButton={{ color:'rgb(13,92,182) ', fontSize:'15px'}}
                    >
                    </ButtonComponent>
                </div>

            </Col>
        </Row>
    )
}

export default ProductDetailComponent