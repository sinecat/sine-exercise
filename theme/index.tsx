import Theme from 'rspress/theme';
import UserInfo from "./components/UserInfo";
import '../styles/index.less'
import 'animate.css';
import ScrollProgress from "./components/ScrollProgressBar/ScrollProgress.tsx";
import HomePage from "../components/HomePage";
import FloatMenu from "./components/FloatMenu.tsx";

// 以下展示所有的 Props
const Layout = () => {

    return <>
        <Theme.Layout
            afterDoc={<FloatMenu/>}
            afterNavMenu={<UserInfo/>}
            afterOutline={<ScrollProgress />}
        />
    </>
};

const HomeLayout = () => <HomePage />;

export default {
    ...Theme,
    Layout,
    HomeLayout
};

export * from 'rspress/theme';
