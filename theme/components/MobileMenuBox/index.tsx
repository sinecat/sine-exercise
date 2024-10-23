import React from 'react';
import SearchButton from "../SearchButton";
import BackToTopButton from "../BackToTopButton";
import {useWindowSize} from "@uidotdev/usehooks";
import style from './style.module.less'
import BackToBottomButton from "../BackToBottomButton";

const MobileMenuBox = () => {
    const size = useWindowSize()

    return <>
        <div className={style.mobileMenuContainer}>
            <BackToTopButton/>
            {size.width && size.width < 960 && <SearchButton/>}
            <BackToBottomButton/>
        </div>
    </>
        ;
};

export default MobileMenuBox;