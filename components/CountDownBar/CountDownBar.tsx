import React from 'react';
import { useCountDown } from 'ahooks';
import { motion } from 'framer-motion';
import './CountDownBar.less';
import {ClockCircleOutlined} from "@ant-design/icons";

const formatDate = (year: number, month: number, day: number): string => {
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} 23:59:59`;
};

const AnimatedDigit: React.FC<{ value: string }> = ({ value }) => {
    return (
        <motion.div
            key={value} // 当 value 变化时，自动触发动画
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block text-green-primary"
        >
            {value}
        </motion.div>
    );
};

const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => {
    const formattedValue = String(value).padStart(2, '0');
    const digits = formattedValue.split(''); // 拆分成个位和十位

    return (
        <div className="flex items-end">
            <div className="flex min-w-[24px]">
                {digits.map((digit, index) => (
                    <AnimatedDigit key={index + digit} value={digit} />
                ))}
            </div>
            <span className="ml-1 text-gray-500 text-sm">{label}</span>
        </div>
    );
};

const CountDownBar = () => {
    const [countdown, formattedRes] = useCountDown({
        targetDate: formatDate(2025, 2, 27),
    });

    const { days, hours, minutes, seconds } = formattedRes;

    return (
        <div className="flex items-center w-[250px] px-6 py-3 rounded-full shadow-md bg-white border border-gray-50">
            <div className="flex gap-2 flex-col ml-2">
                <span className="text-gray-500"><ClockCircleOutlined className="text-green-primary mr-4"/>Distance Exam</span>
                <div className="flex gap-4 text-black font-semibold text-xl">
                    <TimeUnit value={days} label="d" />
                    <TimeUnit value={hours} label="h" />
                    <TimeUnit value={minutes} label="m" />
                    <TimeUnit value={seconds} label="s" />
                </div>
            </div>
        </div>
    );
};

export default CountDownBar;
