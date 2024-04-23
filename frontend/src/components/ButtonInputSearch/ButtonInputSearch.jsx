import React from "react";
import { Button } from "antd";
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import {
    SearchOutlined,
} from '@ant-design/icons';


const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton,
        bordered,
        backgroundColorButton = 'rgb(13,92,182)',
        backgroundColorInput = '#fff',
        colorButton = '#ff' } = props
    return (
        <div style={{ display: 'flex', }}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                bordered={bordered}
                style={{ backgroundColor: backgroundColorInput }} />
            <ButtonComponent
                size={size}
                styleButton={{ background: backgroundColorButton, border: !bordered && 'none' }}
                icon={<SearchOutlined style={{ color: '#fff' }} color={colorButton} />}
                textButton={textButton}
                styleTextButton={{color: colorButton}}
            />
        </div>
    )
}

export default ButtonInputSearch