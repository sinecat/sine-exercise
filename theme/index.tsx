import Theme from 'rspress/theme';
import MobileMenuBox from "./components/MobileMenuBox";

// 以下展示所有的 Props
const Layout = () => (
    <>
        <Theme.Layout
            afterDoc={<MobileMenuBox/>}
        />
    </>
);

export default {
    ...Theme,
    Layout,
};

export * from 'rspress/theme';