import React, {useEffect} from 'react';
import {CommentOutlined, LeftOutlined} from "@ant-design/icons";
import { FloatButton } from 'antd';
import useSubmitStore from "../../store/useExerciseStore";

const SubmitButton = () => {
    const {setSubmitted} = useSubmitStore();

    const handleSubmit = ()=>{
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
                key="left"
                trigger="click"
                placement="left"
                icon={<LeftOutlined key="left" />}
            >
                <FloatButton onClick={handleSubmit}/>
                {/*<FloatButton icon={<CommentOutlined />} />*/}
            </FloatButton.Group>
        </div>
    );
};

export default SubmitButton;