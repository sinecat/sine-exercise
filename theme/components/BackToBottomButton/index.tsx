import React, {useMemo} from 'react';
import SineButtonContainer from "../SineButtonContainer";
import {DownOutlined} from "@ant-design/icons";
import {useScroll} from "ahooks";

const BackToBottomButton = () => {
    const position = useScroll()

    const isShow = useMemo(() => {
        return position && position.top < document.body.scrollHeight-window.innerHeight-1 || false
    }, [position?.top])

    const handleClick = () => {
        window.scrollTo({top: document.body.scrollHeight})
    }

    return (
        isShow && <SineButtonContainer
            onClick={handleClick}
        >
            <DownOutlined className="text-gray-500"/>
        </SineButtonContainer>
    );
};

export default BackToBottomButton;
