import React from 'react';
import SineButtonContainer from "../SineButtonContainer";
import {DownOutlined} from "@ant-design/icons";

const BackToBottomButton = () => {
    const handleClick = ()=>{
        window.scrollTo({top:document.body.scrollHeight, behavior:'smooth'})
    }

    return (
        <SineButtonContainer
            onClick={handleClick}
        >
            <DownOutlined className="text-gray-500"/>
        </SineButtonContainer>
    );
};

export default BackToBottomButton;