import React from 'react';
import {useCountDown} from 'ahooks';
import {ClockCircleOutlined} from '@ant-design/icons';
import './CountDownBar.less'

function formatDate(year: number, month: number, day: number): string {
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} 23:59:59`;
}

const CountDownBar = () => {
    const [countdown, formattedRes] = useCountDown({
        targetDate: `2025-3-16 23:59:59`,
    });
    const {days, hours, minutes, seconds} = formattedRes;

    return (
        <div
            className="flex items-center w-80 px-5 py-3 rounded-full shadow-md bg-white border border-gray-50">
            {/*<div className="mr-2">*/}
            {/*    <ClockCircleOutlined className="text-2xl text-green-primary"/>*/}
            {/*</div>*/}

            <div className="flex gap-2 flex-col ml-2">
                <span className="text-gray-500 text-sm">Distance Exam</span>
                <div className="flex gap-4 text-black font-semibold text-xl">
                    <div>
                        <span className={'inline-block text-green-primary pr-1'}>{days}</span><span>d</span>
                    </div>
                    <div>
                        <span className={'w-8 text-center inline-block text-green-primary'}>{hours}</span><span>h</span>
                    </div>
                    <div>
                        <span
                            className={'w-8 text-center inline-block text-green-primary animate-bounce'}>{minutes}</span><span>m</span>
                    </div>
                    <div>
                        <span
                            className={'w-8 text-center inline-block text-green-primary animate-bounce animation-delay-500'}>{seconds}</span><span>s</span>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default CountDownBar;
