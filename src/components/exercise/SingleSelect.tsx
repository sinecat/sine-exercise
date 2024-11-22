import React from 'react';
import {clsx} from "clsx";

interface SingleSelectProps {
  options: string[];
  value?: string;
  onChange: (value: string) => void;
  correctOption?: string; // 正确选项
  showCorrectAnswer?: boolean; // 是否显示正确答案
}

const SingleSelect: React.FC<SingleSelectProps> = (props: SingleSelectProps) => {
  const { options, value, onChange, correctOption, showCorrectAnswer = false } = props;

  const handleChange = (value:string)=>{
    onChange(value)
  }

  return (
    <div className="space-y-4">
      {options.map((text: string, index: number) => {
        const _value = String.fromCharCode(65 + index);
        const isSelected = value === _value;
        const isCorrect = _value === correctOption;
        const isWrong = showCorrectAnswer && isSelected && !isCorrect;

        return (
          <label
            key={index}
            className={clsx(
              'flex items-center px-4 py-2 border rounded-lg cursor-pointer transition-all',
              {
                'bg-green-50 border-green-300': isSelected && !showCorrectAnswer, // 正常选中
                'bg-red-50 border-red-300': isWrong, // 错误选中
                'bg-green-50  border-green-300': showCorrectAnswer && isCorrect, // 显示正确答案
                'hover:bg-gray-50 border-gray-300': !isSelected || (showCorrectAnswer && !isWrong && !isCorrect), // 默认
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
                'w-7 h-7 text-center leading-[26px] shrink-0 rounded-full border mr-3',
                {
                  'bg-green-500 text-white border-green-500': isSelected || (showCorrectAnswer && isCorrect), // 正确选中
                  'bg-red-500 text-white border-red-500': isWrong, // 错误选中
                  'border-gray-300': !isSelected || (showCorrectAnswer && !isCorrect && !isWrong), // 默认
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
