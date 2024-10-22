import Theme from 'rspress/theme';
import './style.css'
import {Search} from 'rspress/theme';
import MobileMenuBox from "./components/MobileMenuBox.tsx";

// 以下展示所有的 Props
const Layout = () => (
// @ts-ignore
    <>
        <Theme.Layout/>
        <MobileMenuBox/>
    </>
);

export default {
    ...Theme,
    Layout,
};

export * from 'rspress/theme';