import Meta from "antd/es/card/Meta";
import React from "react";
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from "./style";
import { StarFilled } from '@ant-design/icons';
import logo from '../../assets/images/logo.png'


const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{width:'120px', height:'200px'}}
            style={{ width: 240 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <img 
            src={logo} 
            style={{
                width:'68px', height:'14px', position:'absolute',top:-1,left:0,
                borderTopLeftRadius:'3px'
            }}/>
            <StyleNameProduct>Truyện Doremon</StyleNameProduct>
            <WrapperReportText>
                <span style={{marginRight:'4px'}}>
                    <span>4.9</span>
                    <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                </span>
                <span>  | Đã bán 1000+</span>
            </WrapperReportText>
            <WrapperPriceText>
                100.000đ
                <WrapperDiscountText>
                    -5%
                </WrapperDiscountText>
            </WrapperPriceText>
            
        </WrapperCardStyle>
    )
}

export default CardComponent