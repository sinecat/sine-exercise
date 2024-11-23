import React from 'react';
import {clsx} from "clsx";
import {cn} from "../../lib/utils";

interface SingleSelectProps {
    options: React.ReactNode[];
    value?: string;
    onChange: (value: string) => void;
    correctAnswer?: "A" | "B" | "C" | "D"; // 正确选项
    showCorrectAnswer?: boolean; // 是否显示正确答案
}

const SingleSelect: React.FC<SingleSelectProps> = (props: SingleSelectProps) => {
    const {options, value, onChange, correctAnswer, showCorrectAnswer = false} = props;
    const handleChange = (value: string) => {
        onChange(value)
    }

    return (
        <div className="space-y-4">
            {options.map((text, index) => {
                const _value = String.fromCharCode(65 + index);
                const isSelected = value === _value;
                const isCorrect = _value === correctAnswer;
                const isWrong = showCorrectAnswer && isSelected && !isCorrect;

                return (
                    <label
                        key={index}
                        className={cn(
                            'flex items-center px-4 py-2 border border-transparent rounded-lg cursor-pointer transition-all',
                            {
                                'bg-success border-success': isSelected && !showCorrectAnswer, // 正常选中
                                'bg-error border-error': isWrong, // 错误选中
                                'bg-success border border-success': showCorrectAnswer && isCorrect, // 显示正确答案
                                'hover:bg-gray-50': !showCorrectAnswer && !isSelected, // 默认
                            },
                        )}
                    >
                        <input
                            type="radio"
                            name="single-select"
                            value={_value}
                            checked={isSelected}
                            disabled={showCorrectAnswer} // 如果显示正确答案时禁用交互
                            onChange={() => handleChange(_value)}
                            className="hidden" // 隐藏原生 radio
                        />
                        {/* 圆圈 */}
                        <div
                            className={clsx(
                                'w-7 h-7 text-center leading-[27px] shrink-0 rounded-full mr-3',
                                {
                                    'bg-[#32CA99] text-white': !showCorrectAnswer&&isSelected || (showCorrectAnswer && isCorrect), // 正确选中
                                    'bg-[#EF4444] text-white': isWrong, // 错误选中
                                    '': !isSelected || (showCorrectAnswer && !isCorrect && !isWrong), // 默认
                                },
                            )}
                        >
                            <span>{String.fromCharCode(65 + index)} {/* 生成 A, B, C, D */}</span>
                        </div>
                        {/* 文本 */}
                        <span>{text}</span>
                    </label>
                );
            })}
        </div>
    );
};

export default SingleSelect;
