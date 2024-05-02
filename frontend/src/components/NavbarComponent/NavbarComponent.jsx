import { Checkbox, Col, Rate, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style'

const NavBarComponent = () => {
    const onChange = () => { }

    const [categories, setCategories] = useState([]); // State cho danh sách danh mục
    
    useEffect(() => {
        fetch("/api/categories") // Gửi yêu cầu HTTP để lấy danh sách danh mục
            .then((response) => response.json())
            .then((data) => {
                setCategories(data.categories); // Cập nhật state với danh sách danh mục
            })
            .catch((error) => console.error("Có lỗi xảy ra:", error)); // Xử lý lỗi nếu có
    }, []); // Chỉ chạy một lần khi component được mount
    
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option, index) => (
                    <Link key={index} to={`/category/${option.toLowerCase().replace(' ', '-')}`}>
                        <WrapperTextValue>{option}</WrapperTextValue> {/* Tạo liên kết đến trang danh mục */}
                    </Link>
                ));
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox style={{ marginLeft: 0 }} value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{ dispaly: 'flex' }}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span> {`tu ${option}  sao`}</span>
                        </div>
                    )
                })
            case 'price':
                return options.map((option) => {
                    return (
                        <WrapperTextPrice>{option}</WrapperTextPrice>
                    )
                })
            default:
                return {}
        }
    }

    return (
        // <div>
        //     <WrapperLableText>Danh mục sản phẩm</WrapperLableText>
        //     <WrapperContent>
        //         {renderContent('text', ['Sách thiếu nhi', 'Sách giáo khoa', 'Sách ngoại ngữ'])}
        //     </WrapperContent>
        // </div>
        <div>
            <WrapperLableText>Danh mục sản phẩm</WrapperLableText>
            <WrapperContent>
                {categories.map((category) => (
                    
                        <WrapperTextValue>{category.name}</WrapperTextValue>
                
                ))}
            </WrapperContent>
        </div>
    )
}

export default NavBarComponent