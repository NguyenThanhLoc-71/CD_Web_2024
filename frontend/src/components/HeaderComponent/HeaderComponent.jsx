import React, {useState,useEffect} from "react";
import { Badge, Col } from 'antd'
import { WrapperHeader, WrapperTextHeader, WrapperHearderAccount, WrapperTextHeaderSmall } from './style'
import Search from "antd/es/transfer/search";
import {
    UserOutlined, CaretDownOutlined, ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";


const HeaderComponent = () => {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    return (
        <div>
            <WrapperHeader>
                <Col span={6}>
                    <WrapperTextHeader>
                        BookStore
                    </WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <ButtonInputSearch
                        size="large"
                        bordered={false}
                        textButton="Tìm kiếm"
                        placeholder="input search text"
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <WrapperHearderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <WrapperTextHeaderSmall>
                                {username ? `${username}`: "Đăng nhập / Đăng ký"}                          
                                </WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHearderAccount>
                    <div>
                        <Badge count={4} size="small">
                            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                        </Badge>
                        <WrapperTextHeaderSmall>
                            Giỏ hàng
                        </WrapperTextHeaderSmall>

                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent