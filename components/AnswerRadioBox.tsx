import React, {useState} from 'react';
import {Radio, Form, Card, Button, RadioChangeEvent} from 'antd';
import {useQuestionStore} from '../modal/currentQuestions'

const AnswerRadioBox = (props:{index:number}) => {
    const {index} = props;
    const {currentQuestions,setCurrentQuestion,setAllQuestionsCorrect } = useQuestionStore();

    const handleChange = (e: RadioChangeEvent) => {
        setCurrentQuestion(index,e?.target?.value)
    }

    const handleBtnClick = ()=>{
        setAllQuestionsCorrect(1)
    }

    return (
        <>
            <Card>
                <Button onClick={handleBtnClick}>提交</Button>
                    <Radio.Group onChange={handleChange}>
                        <Radio value={'A'}>A</Radio>
                        <Radio value={'B'}>B</Radio>
                        <Radio value={'C'}>C</Radio>
                        <Radio value={'D'}>D</Radio>
                    </Radio.Group>
                {currentQuestions[index].currentAnswer?<span>正确答案：{currentQuestions[index].currentAnswer}</span>:null}
            </Card>
        </>
    );
};

export default AnswerRadioBox;
