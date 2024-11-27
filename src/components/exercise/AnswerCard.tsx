import React, {useEffect, useRef, useState} from "react";
import {DownOutlined, UpOutlined} from "@ant-design/icons";
import {clsx} from "clsx";
import useSubmitStore from "../../store/useExerciseStore";
import {Button} from "antd";
import {useWindowSize} from "@uidotdev/usehooks";
import {useSize, useTimeout} from "ahooks";
import useAnswerCardHeightStore from "../../store/useAnswerCardHeightStore";
import useTimer from "../../hooks/useTimer";

export const AnswerCard: React.FC = () => {
    const {setHeight} = useAnswerCardHeightStore();
    const [leftOffset, setLeftOffset] = useState(0);
    const [width, setWidth] = useState(0);
    const [isShowCard, setIsShowCard] = useState(true)
    const answerCardRef = useRef(null);
    const answerCardSize = useSize(answerCardRef);
    const {formattedTime, start, pause, reset: timeReset} = useTimer()
    const [isStartTimed, setIsStartTimed] = useState(false)
    const [isBegan, setIsBegan] = useState(false)
    const [accuracyRate, setAccuracyRate] = useState(0)
    const [isReadOnly, setIsReadOnly] = useState(false)

    const size = useWindowSize()
    const {
        exerciseState,
        setSubmitted,
        resetExerciseState,
        resetAllExerciseState
    } = useSubmitStore();

    const reset = () => {
        resetExerciseState()
        timeReset()
        setIsReadOnly(false)
        setIsBegan(false)
    }

    const handleClickShowCard = () => {
        setIsShowCard(!isShowCard)
    }

    const handleClickQuestionNumber = (index:number) => {
        window.location.hash = `#${index}`;
    }

    const handleClickSubmit = () => {
        setSubmitted(true)
        pause()
        // 计算正确率
        const correctCount = exerciseState.currentAnswersData.filter((item, index) => item === exerciseState.correctAnswersData[index]).length;
        if (!correctCount) {
            setAccuracyRate(0)
            return
        }
        // 转换为整数百分比
        setAccuracyRate(Math.round((correctCount / exerciseState.correctAnswersData.length) * 100));
    }

    const handleClickReset = () => {
        reset()
    }

    const handleClickTimeBtn = () => {
        if (!isBegan) {
            setIsBegan(true)
        }
        if (isStartTimed) {
            pause()
        } else {
            start()
        }
        setIsStartTimed(!isStartTimed)
    }

    const handleClickReadOnlyBtn = () => {
        setIsReadOnly(!isReadOnly)
        setSubmitted(true)
    }

    useEffect(() => {
        setHeight(answerCardSize?.height || 0)
    }, [answerCardSize]);

    // useEffect(() => {
    //     if (!isBegan) {
    //         const hasData = exerciseState.currentAnswersData.some(item => item !== '');
    //         if (hasData){
    //             setIsBegan(true)
    //             start()
    //             setIsStartTimed(true)
    //         }
    //     }
    // }, [exerciseState.currentAnswersData]);

    useEffect(() => {
        const updatePosition = () => {
            // 获取 .rspress-doc 元素
            const targetElement = document.querySelector<HTMLElement>(".rspress-doc");
            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();
                setLeftOffset(rect.left);
                setWidth(rect.width);
            }
        };

        // 初始化时计算位置
        updatePosition();

        // 监听窗口大小变化
        window.addEventListener("resize", updatePosition);
        return () => {
            // 移除监听
            window.removeEventListener("resize", updatePosition);
            resetAllExerciseState();
        };
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                left: size.width && (size.width < 960) ? leftOffset - 24 : leftOffset,
                width: size.width && (size.width < 960) ? width + 48 : width,
                zIndex: 9999,
            }}
            className={clsx("bg-background shadow-top rounded-tr-2xl")}
        >
            <p
                className="absolute flex gap-2 text-center rounded-t-2xl -top-8 left-0 px-4 py-2 cursor-pointer bg-inherit shadow-top"
                onClick={handleClickShowCard}
            >
                {!isReadOnly && <span className="pr-2">{formattedTime}</span>}
                {exerciseState.isSubmitted && !isReadOnly &&
                    <span className="pr-2">{'正确率：' + accuracyRate + '%'}</span>}
                <span> 答题卡{isShowCard ? <DownOutlined/> : <UpOutlined/>}</span>
            </p>

            <div ref={answerCardRef} className={clsx("rspress-answer-card", isShowCard ? "block" : "hidden")}>
                <div className={clsx("flex flex-wrap gap-2 p-4")}>
                    {exerciseState.correctAnswersData.map((item: string, index: number) => (
                        <button
                            key={index}
                            className={clsx(
                                "w-8 h-8 flex items-center justify-center rounded-full border border-default hover:border-[#32CA99] hover:bg-[#32CA99] hover:text-white",
                                !exerciseState.isSubmitted && exerciseState.currentAnswersData[index] && "border-rs-tip bg-rs-tip text-success-dark",
                                exerciseState.isSubmitted && exerciseState.currentAnswersData[index] === exerciseState.correctAnswersData[index] && "bg-rs-tip border-rs-tip text-success",
                                exerciseState.isSubmitted && exerciseState.currentAnswersData[index] !== exerciseState.correctAnswersData[index] && "bg-rs-danger border-rs-danger text-error-dark",
                            )}
                            onClick={() => handleClickQuestionNumber(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                {<div className="flex justify-end mx-4 mb-4 gap-4">
                    {!exerciseState.isSubmitted &&
                        <Button type="primary"
                                onClick={handleClickTimeBtn}>{isStartTimed ? '暂停计时' : '开始计时'}</Button>}
                    {!exerciseState.isSubmitted &&
                        <Button type="primary" onClick={handleClickReadOnlyBtn}>只看</Button>}
                    {!exerciseState.isSubmitted && <Button type="primary" onClick={handleClickSubmit}>交卷</Button>}
                    {exerciseState.isSubmitted && <Button type="primary" onClick={handleClickReset}>重做</Button>}
                </div>}
            </div>
        </div>
    );
};

export default AnswerCard;
