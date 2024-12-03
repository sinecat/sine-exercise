import Theme from 'rspress/theme';
import UserInfo from "./components/UserInfo";
import '../styles/index.less'
import 'animate.css';
import ScrollProgress from "./components/ScrollProgressBar/ScrollProgress.tsx";
import HomePage from "../components/HomePage";
import FloatMenu from "./components/FloatMenu.tsx";
import {useDark} from "rspress/runtime";
import {useEffect, useMemo} from "react";

// 以下展示所有的 Props

let metaThemeColor = document.querySelector("meta[name='theme-color']");

const Layout = () => {
    // 根据主题切换pwa状态栏的颜色
    const dark = useDark();

    useEffect(() => {
        const color = dark ? "#21252B" : "#ffffff";

        if (metaThemeColor) {
            metaThemeColor.setAttribute("content", color);
        } else {
            metaThemeColor = document.createElement("meta");
            metaThemeColor.setAttribute("name", "theme-color");
            metaThemeColor.setAttribute("content", color);
            document.head.appendChild(metaThemeColor);
        }
    }, [dark]);

    return <>
        <Theme.Layout
            afterDoc={<FloatMenu/>}
            afterNavMenu={<UserInfo/>}
            afterOutline={<ScrollProgress/>}
        />
    </>
};

const HomeLayout = () => <HomePage/>;

export default {
    ...Theme,
    Layout,
    HomeLayout
};

export * from 'rspress/theme';
