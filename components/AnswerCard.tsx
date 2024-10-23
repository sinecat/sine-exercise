import React, {useState, useMemo} from 'react';
import {
    Button,
    Radio,
    theme,
    Popover,
    Flex,
    ConfigProvider,
    Space,
    Card,
    ButtonProps,
    Typography, Modal
} from 'antd';
import {useWindowSize} from "@uidotdev/usehooks";
import {useEmotionCss} from '@ant-design/use-emotion-css';
import {ScreenSizeType} from "../constant";
import {useQuestionStore} from "../modal/currentQuestions";
import useThemeListener from "../hooks/useTheme";

const {Text} = Typography;
const {confirm} = Modal;

const AnswerCardButton = ({children, screenSize, ...rest}: ButtonProps & { screenSize: ScreenSizeType }) => {
    const smScreenCls = useEmotionCss(() => (
        {
            position: 'fixed',
            bottom: 30,
            right: 10,
            zIndex: 999
        }
    ))

    const mdScreenCls = useEmotionCss(() => (
        {
            position: 'fixed',
            bottom: 30,
            right: 10,
            zIndex: 999
        }
    ))

    const lgScreenCls = useEmotionCss(() => (
        {
            position: 'fixed',
            right: '18%',
            bottom: 30,
            zIndex: 999
        }
    ))

    const screenClsObj = {
        sm: smScreenCls,
        md: mdScreenCls,
        lg: lgScreenCls
    }

    // @ts-ignore
    return <Button className={screenClsObj[screenSize]} {...rest}>{children}</Button>
};

const AnswerCard = () => {
    const [open, setOpen] = useState(false);
    const size = useWindowSize();
    const [siteTheme, setSiteTheme] = useThemeListener()

    const {currentQuestions, setCurrentQuestion, setAllQuestionsCorrect, resetAllQuestions} = useQuestionStore();

    const screenSize = useMemo(() => {
        if (size?.width && size.width < 960) return 'sm'
        if (size?.width && size.width < 1280) return 'md'
        return 'lg'
    }, [size])

    const cardCls = useEmotionCss(() => ({
        position: 'fixed',
        bottom: 0,
        display: open ? 'flex' : 'none',
        width: screenSize === 'lg' ? 750 : screenSize === 'md' ? 620 : '100%',
        overflow: 'auto',
        right: screenSize === 'lg' ? 260 : 0,
        zIndex: 999
    }))

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const handleSelect = (currentIndex: number, value: string) => {
        setCurrentQuestion(currentIndex, value)
    };

    const handleSubmitClick = () => {
        confirm({
            title: '提示',
            content: '确定提交吗?',
            onOk() {
                setAllQuestionsCorrect(0)
            },
        });
    };

    const handleResetClick = () => {
        confirm({
            title: '提示',
            content: '确定重做吗？',
            onOk() {
                resetAllQuestions()
            },
        });
    };

    const handleFreshTheme = () => {
        const currentTheme = localStorage && localStorage.getItem('rspress-theme-appearance')
        setSiteTheme(currentTheme || 'light')
        setOpen(false)
    }

    return (
        <>
            <AnswerCardButton screenSize={screenSize} style={{display: open ? 'none' : 'block'}} type="primary"
                              onClick={showDrawer}>
                答题卡
            </AnswerCardButton>
            <ConfigProvider
                theme={{
                    // @ts-ignore
                    algorithm: siteTheme === 'dark' ? theme.darkAlgorithm : '',
                    token: {
                        colorBgContainer: siteTheme === 'dark' ? '#191D24' : '#fff',
                    }
                }}
            >
                <Card className={cardCls}>
                    <Flex gap={10} justify={'end'} style={{marginBottom: 20}}>
                        <Button onClick={handleFreshTheme}>更新主题</Button>
                        <Button onClick={() => setOpen(false)}>关闭</Button>
                        <Button type="primary" onClick={handleSubmitClick}>提交</Button>
                        <Button type="primary" onClick={handleResetClick}>重做</Button>
                    </Flex>
                    <Flex gap={13} wrap>
                        {currentQuestions?.map((item) => (
                            <Popover
                                key={item.index}
                                content={
                                    <Radio.Group
                                        onChange={(e) => handleSelect(item.index, e.target.value)}
                                        value={item.answer}
                                    >
                                        <Radio value="A">A</Radio>
                                        <Radio value="B">B</Radio>
                                        <Radio value="C">C</Radio>
                                        <Radio value="D">D</Radio>
                                    </Radio.Group>
                                }
                                trigger="click">
                                <Space>
                                    <div style={{width: 10}}>{item.index + 1}</div>
                                    <Button
                                        style={{width: 50}}
                                    >
                                        <Space size={5}>
                                            <Text
                                                style={{margin: 0}}
                                                type={!item.answer && item.isCorrect === -1 ? 'warning' : item.isCorrect !== -1 ? item.isCorrect ? 'success' : 'danger' : undefined}>
                                                {item.answer ? `${item.answer}` : '未答'}
                                            </Text>
                                            {item.isCorrect !== 1 ? <Text type="success">
                                                {item.currentAnswer}
                                            </Text> : null}
                                        </Space>
                                    </Button>
                                </Space>
                            </Popover>
                        ))}
                    </Flex>
                </Card>
            </ConfigProvider>
        </>
    );
};

export default AnswerCard;
