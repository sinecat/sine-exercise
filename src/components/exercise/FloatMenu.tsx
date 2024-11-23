import React, {useEffect} from 'react';
import {
    CommentOutlined,
    LeftOutlined,
    ProductOutlined,
    SearchOutlined,
    VerticalAlignBottomOutlined
} from "@ant-design/icons";
import {FloatButton} from 'antd';
import {Search} from "rspress/theme";
import useSubmitStore from "../../store/useExerciseStore";

const FloatMenu = () => {
    const {setSubmitted} = useSubmitStore();

    const handleSubmit = () => {
        setSubmitted(true);
    }

    useEffect(() => {
        return () => {
            setSubmitted(false);
        }
    }, []);

    return (
        <div>
            <FloatButton.Group
                className={"bottom-[30px] right-[12px] lg:right-[calc(18%+3px)]"}
                trigger="click"
                placement="top"
                icon={<ProductOutlined/>}
            >
                <FloatButton.BackTop visibilityHeight={0} duration={0}/>
                <FloatButton
                    icon={<VerticalAlignBottomOutlined />}
                    onClick={() => {
                        window.scrollTo({top: document.body.scrollHeight})
                    }}
                />
                <div className="w-10 h-10 flex md:hidden lg:hidden items-center justify-center bg-white rounded-full">
                    <Search/>
                </div>
            </FloatButton.Group>
        </div>
    );
};

export default FloatMenu;