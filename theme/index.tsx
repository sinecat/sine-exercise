import Theme from 'rspress/theme';
import MobileMenuBox from "./components/MobileMenuBox";
import UserInfo from "./components/UserInfo";
import '../styles/index.less'
import 'animate.css';
import ScrollProgress from "./components/ScrollProgressBar/ScrollProgress.tsx";

// 以下展示所有的 Props
const Layout = () => {

    return <>
        <Theme.Layout
            afterDoc={<MobileMenuBox/>}
            afterNavMenu={<UserInfo/>}
            afterOutline={<ScrollProgress />}
        />
    </>
};

export default {
    ...Theme,
    Layout,
};

export * from 'rspress/theme';
