import React, {useState} from 'react';
import SingleSelect from "./SingleSelect";
import CollapsibleTip from "../../../components/CollapsibleTip";

type QuestionAndAnswersCardProps = {
    children?: React.ReactNode;
    options: React.ReactNode[];
    currentAnswer: "A"|"B"|"C"|"D";
};

const QuestionAndAnswersCard = (props: QuestionAndAnswersCardProps) => {
    const {children,options,currentAnswer} = props;
    const [value, setValue] = useState<string>()
    const showCorrectAnswer = true
    return (
        <div>
            <SingleSelect
                options={options}
                currentAnswer={currentAnswer}
                value={value}
                onChange={setValue}
                showCorrectAnswer={showCorrectAnswer}
            />
            {showCorrectAnswer&&<CollapsibleTip title={"解析"}>{children}</CollapsibleTip>}
        </div>
    );
};

export default QuestionAndAnswersCard;
