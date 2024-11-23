import React, {useEffect, useState} from 'react';
import SingleSelect from "./SingleSelect";
import CollapsibleTip from "../../../components/CollapsibleTip";
import useSubmitStore from "../../store/useExerciseStore";

type QuestionAndAnswersCardProps = {
    children?: React.ReactNode;
    options: React.ReactNode[];
    correctAnswer: "A" | "B" | "C" | "D";
    index: number;
};

const QuestionAndAnswerItem = (props: QuestionAndAnswersCardProps) => {
    const {children, options, correctAnswer, index:propsIndex} = props;
    const index = propsIndex-1
    const [value, setValue] = useState<string>("")
    const {exerciseState, setCurrentAnswer, setCorrectAnswer} = useSubmitStore();

    useEffect(() => {
        setCurrentAnswer(value, index)
    }, [value]);

    useEffect(() => {
        setCorrectAnswer(correctAnswer, index)
    }, []);

    return (
        <div>
            <SingleSelect
                options={options}
                correctAnswer={correctAnswer}
                value={exerciseState.currentAnswersData[index]}
                onChange={setValue}
                showCorrectAnswer={exerciseState.isSubmitted}
            />
            {exerciseState.isSubmitted&&children && <CollapsibleTip type="tip" title="解析">{children}</CollapsibleTip>}
        </div>
    );
};

export default QuestionAndAnswerItem;
