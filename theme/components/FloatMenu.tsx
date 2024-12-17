import React, {useEffect} from 'react';
import {
    ProductOutlined, RightCircleOutlined, SendOutlined,
    VerticalAlignBottomOutlined
} from "@ant-design/icons";
import {ConfigProvider, FloatButton, theme} from 'antd';
import {Search} from "rspress/theme";
import {useDark} from "rspress/runtime";
import {clsx} from "clsx";
import {useParams} from "react-router-dom";
import {useNavigate,useLocation} from "rspress/runtime"
import useAnswerCardHeightStore from "../../src/store/useAnswerCardHeightStore.ts";
import {cn} from "../../src/lib/utils.ts";
import {useLocalStorage} from '@uidotdev/usehooks';

const FloatMenu = () => {
    const dark = useDark();
    const [cardHeight, setCardHeight] = React.useState(0);
    const params = useParams();
    const navigate = useNavigate()
    const location = useLocation()
    const {height} = useAnswerCardHeightStore()
    const [markUrl, setMarkUrl] = useLocalStorage('markUrl', '')

    const handleSetMark = () => {
        // const url = location.pathname+location.hash
        // setMarkUrl(url)
        setMarkUrl(window.location.href || '/')
    }

    const handleNavigateToMarkUrl = () => {
        window.location.href = markUrl
        // history.pushState(null, '', markUrl)
        // navigate(markUrl)
    }

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
                <FloatButton
                    icon={<SendOutlined />}
                    onClick={handleSetMark}
                />
                <FloatButton
                    icon={<RightCircleOutlined />}
                    onClick={handleNavigateToMarkUrl}
                />
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
