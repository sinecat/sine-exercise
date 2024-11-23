import {Radio, Card, Button, RadioChangeEvent, Typography, Flex, Modal, theme, ConfigProvider} from 'antd';
import {useQuestionStore} from '../store/currentQuestions'
import useThemeListener from "../hooks/useTheme";

const {Text} = Typography;

const AnswerRadioBox = (props: { index: number, questionNum: number }) => {
    const {index, questionNum} = props;
    const {currentQuestions, setCurrentQuestion} = useQuestionStore();
    const [siteTheme] = useThemeListener()
    const handleChange = (e: RadioChangeEvent) => {
        setCurrentQuestion(index, e?.target?.value)
    }

    // @ts-ignore
    return <ConfigProvider
        theme={{
            // @ts-ignore
            algorithm: siteTheme === 'dark' ? theme.darkAlgorithm : '',
            token: {
                colorBgContainer: siteTheme === 'dark' ? '#191D24' : '#fff',
            }
        }}
    >
        <Card>
            <Radio.Group disabled={currentQuestions[index].isCorrect !== -1}
                         value={currentQuestions[index].answer} onChange={handleChange}>
                <Radio value={'A'}>A</Radio>
                <Radio value={'B'}>B</Radio>
                <Radio value={'C'}>C</Radio>
                <Radio value={'D'}>D</Radio>
            </Radio.Group>
            {currentQuestions[index].currentAnswer ?
                <Flex gap="middle">
                    <Text type={currentQuestions[index].isCorrect ? 'success' : 'danger'}>
                        你的答案：{currentQuestions[index].answer ? currentQuestions[index].answer : '未答'}
                    </Text>
                    <Text type="success">
                        正确答案：{currentQuestions[index].currentAnswer}
                    </Text>
                </Flex> :
                null}
        </Card>
    </ConfigProvider>
};

export default AnswerRadioBox;
