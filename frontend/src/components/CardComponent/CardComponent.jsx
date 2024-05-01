import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from "./style";
import { StarFilled } from '@ant-design/icons';
import logo from '../../assets/images/logo.png'
import {WrapperStyleTextSell} from '../ProductDetailComponent/style'


const CardComponent = ({product}) => {
    const {name,sold, price, image, rating, discount} = product;

    return (
        <WrapperCardStyle
            hoverable
            headStyle={{width:'120px', height:'200px'}}
            style={{ width: 240 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="product" src={image} />}
        >
            <img 
            src={logo} 
            style={{
                width:'68px', height:'14px', position:'absolute',top:-1,left:0,
                borderTopLeftRadius:'3px'
            }}/>
            <StyleNameProduct>{name}</StyleNameProduct>
            <WrapperReportText>
                <span style={{marginRight:'4px'}}>
                    <span>{rating}</span>
                    <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                </span>
                <WrapperStyleTextSell>  | Đã bán {sold}+</WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
               {price}
                <WrapperDiscountText>
                    -{discount}%
                </WrapperDiscountText>
            </WrapperPriceText>
            
        </WrapperCardStyle>
    )
}

export default CardComponent