import React from 'react';
import SearchButton from "../SearchButton.tsx";
import BackToTopButton from "../BackToTopButton.tsx";
import {useWindowSize} from "@uidotdev/usehooks";
import style from './style.module.less'

const MobileMenuBox = () => {
    const size = useWindowSize()

    return <>
        {size.width && size.width < 960 &&
            <div className={style.mobileMenuContainer}>
                <SearchButton/>
                <BackToTopButton/>
            </div>
        }
    </>
        ;
};

export default MobileMenuBox;