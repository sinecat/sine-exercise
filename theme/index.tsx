import Theme from 'rspress/theme';
import MobileMenuBox from "./components/MobileMenuBox";
import {Button} from "antd";
import UserInfo from "./components/UserInfo";

// 以下展示所有的 Props
const Layout = () => {

    return <>
        <Theme.Layout
            afterDoc={<MobileMenuBox/>}
            afterNavMenu={<UserInfo/>}
        />
    </>
};

export default {
    ...Theme,
    Layout,
};

export * from 'rspress/theme';