import Theme from 'rspress/theme';
import './style.css'
import {Search} from 'rspress/theme';
import MobileMenuBox from "./components/MobileMenuBox.tsx";

// 以下展示所有的 Props
const Layout = () => (
// @ts-ignore
    <>
        <Theme.Layout
            /* 左侧侧边栏上面 */
            beforeSidebar={<Search/>}
            /* 左侧侧边栏下面 */
            afterSidebar={<div>afterSidebar</div>}
        />
        <MobileMenuBox/>
    </>
);

export default {
    ...Theme,
    Layout,
};

export * from 'rspress/theme';