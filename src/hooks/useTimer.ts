import {useState, useRef, useCallback, useMemo} from "react";

function useTimer() {
    const [time, setTime] = useState(0); // 当前计时（单位：秒）
    const [isRunning, setIsRunning] = useState(false); // 是否正在运行
    const timerRef = useRef<NodeJS.Timeout | null>(null); // 保存计时器引用

    // 启动计时器
    const start = useCallback(() => {
        if (!isRunning) {
            setIsRunning(true);
            timerRef.current = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
    }, [isRunning]);

    // 暂停计时器
    const pause = useCallback(() => {
        if (isRunning) {
            setIsRunning(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        }
    }, [isRunning]);

    // 重置计时器
    const reset = useCallback(() => {
        setIsRunning(false);
        setTime(0);
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    // 格式化时间为 h:m:s
    const formattedTime = useMemo(() => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }, [time]);

    return {time, isRunning, start, pause, reset, formattedTime};
}

export default useTimer;
