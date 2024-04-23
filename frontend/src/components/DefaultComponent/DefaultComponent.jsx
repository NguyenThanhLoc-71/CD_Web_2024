import React from "react";
import HeaderComponent from '../HeaderComponent/HeaderComponent'

const DefaultComponent = ({Children}) => {
    return (
        <div>
            <HeaderComponent/>
            {Children}
        </div>
    )
}

export default DefaultComponent