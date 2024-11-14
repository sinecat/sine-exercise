import React, {useEffect, useState} from 'react';

const ScrollProgress: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

            const newProgress = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
            setProgress(newProgress || 0);
        };

        window.addEventListener('scroll', handleScroll);

        // 初始化时计算一次进度
        handleScroll();

        // 清理事件监听器
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="mt-2 text-center text-green-primary">
            <div className="h-[1px] w-[90%] mx-auto bg-gray-200"></div>
            {progress + '%'}
        </div>
    );
};

export default ScrollProgress;
