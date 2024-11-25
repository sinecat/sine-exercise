import React, {useEffect} from 'react';
import {
    ProductOutlined,
    VerticalAlignBottomOutlined
} from "@ant-design/icons";
import {ConfigProvider, FloatButton, theme} from 'antd';
import {Search} from "rspress/theme";
import {useDark} from "rspress/runtime";
import {clsx} from "clsx";
import {useParams} from "react-router-dom";
import useAnswerCardHeightStore from "../../src/store/useAnswerCardHeightStore.ts";
import {cn} from "../../src/lib/utils.ts";

const FloatMenu = () => {
    const dark = useDark();
    const [cardHeight, setCardHeight] = React.useState(0);
    const params = useParams();
    const {height} = useAnswerCardHeightStore()

    return (
        <ConfigProvider
            theme={{
                // @ts-ignore
                algorithm: dark ? theme.darkAlgorithm : '',
            }}
        >
            <FloatButton.Group
                className="right-[12px] lg:right-[calc(18%+3px)]"
                style={{bottom: height ? height + 30 : 45}}
                trigger="click"
                placement="top"
                icon={<ProductOutlined/>}
            >
                <FloatButton.BackTop visibilityHeight={0} duration={0}/>
                <FloatButton
                    icon={<VerticalAlignBottomOutlined/>}
                    onClick={() => {
                        window.scrollTo({top: document.body.scrollHeight})
                    }}
                />
                {/*<div className={clsx(*/}
                {/*    "w-10 h-10 flex md:hidden lg:hidden items-center justify-center bg-white rounded-full shadow-xl",*/}
                {/*    dark && "bg-[#1f1f1f]"*/}
                {/*)}>*/}
                {/*    <Search/>*/}
                {/*</div>*/}
            </FloatButton.Group>
        </ConfigProvider>
    );
};

export default FloatMenu;
