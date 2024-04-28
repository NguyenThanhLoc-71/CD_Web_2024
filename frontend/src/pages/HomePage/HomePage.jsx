import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import slide1 from '../../assets/images/slide1.jpg'
import slide2 from '../../assets/images/slide2.jpg'
import slide3 from '../../assets/images/slide3.jpg'
import SlideComponent from "../../components/SlideComponent/SlideComponent";
import CardComponent from "../../components/CardComponent/CardComponent";


const HomePage = () => {
    const arr = ['Truyện tranh', 'Sách giáo khoa', 'Sách ngoại ngữ']
    return (
        <>
            <div style={{ padding: '0 120px' }}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        )
                    })}
                </WrapperTypeProduct>
            </div>
            <div id="container" style={{ backgroundColor: '#efefef', padding:'0 120px', height:'100px' }}>
                <SlideComponent arrImages={[slide1, slide2, slide3]} />
                <div style={{marginTop:'20px', display:'flex', alignItems:'center', gap:'20xp'}}> 
                    <CardComponent/>
                </div>
            </div>
        </>

    )
}

export default HomePage