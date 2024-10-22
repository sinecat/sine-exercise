import React from 'react';
import SineButtonContainer from "./SineButtonContainer.tsx";
import {UpOutlined} from "@ant-design/icons";

const BackToTopButton = () => {

    const handleClick = ()=>{
        window.scrollTo({top:0, behavior:'smooth'})
    }

    return (
        <SineButtonContainer
            onClick={handleClick}
        >
            <UpOutlined className="text-gray-500"/>
        </SineButtonContainer>
    );
};

export default BackToTopButton;