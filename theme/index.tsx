import Theme from 'rspress/theme';
import MobileMenuBox from "./components/MobileMenuBox";
import {Button} from "antd";

// 以下展示所有的 Props
const Layout = () => (
    <>
        <Theme.Layout
            afterDoc={<MobileMenuBox/>}
            afterNavMenu={<Button style={{margin:'0 16px'}}>Login</Button>}
        />
    </>
);

export default {
    ...Theme,
    Layout,
};

export * from 'rspress/theme';