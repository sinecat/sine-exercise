import React, {useMemo} from 'react';
import SineButtonContainer from "../SineButtonContainer";
import {UpOutlined} from "@ant-design/icons";
import {useScroll} from "ahooks";

const BackToTopButton = () => {

    const position = useScroll()

    const isShow = useMemo(() => {
        return position && position.top > 0 || false
    }, [position?.top])

    const handleClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        isShow && <SineButtonContainer
            onClick={handleClick}
        >
            <UpOutlined className="text-gray-500"/>
        </SineButtonContainer>
    );
};

export default BackToTopButton;