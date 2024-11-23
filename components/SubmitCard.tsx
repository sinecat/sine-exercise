import {Card, Flex, Button, Modal} from "antd";
import {useQuestionStore} from "../store/currentQuestions";

const { confirm } = Modal;

const SubmitCard = () => {

    const {setAllQuestionsCorrect,resetAllQuestions} = useQuestionStore();

    const handleClickSubmit = () => {
        confirm({
            title: '提示',
            content: '确定提交吗?',
            onOk() {
                setAllQuestionsCorrect(1)
            },
        });
    };

    const handleResetClick = () => {
        confirm({
            title: '提示',
            content: '确定重做吗？',
            onOk() {
                setAllQuestionsCorrect(1)
            },
        });
    };

    return <Card>
        <Flex gap="middle">
            <Button type="primary" onClick={handleClickSubmit}>提交</Button>
            <Button onClick={handleResetClick}>重做</Button>
        </Flex>
    </Card>;
};

export default SubmitCard;