// @ts-ignore
import { useEffect, useState } from 'react';

// 创建一个自定义事件，用于手动触发 localStorage 的变化监听
const createStorageEvent = (key: string, newValue: string | null) => {
    const event = new Event('local-storage-change');
    (event as any).key = key;
    (event as any).newValue = newValue;
    window.dispatchEvent(event);
};

function useThemeListener() {
    const key = 'rspress-theme-appearance'; // 指定监听的 key 为 'theme'
    const [theme, setTheme] = useState<string | null>(() => {
        // 初始从 localStorage 获取 theme 值
        return localStorage.getItem(key);
    });

    const setLocalStorageTheme = (newTheme: string) => {
        localStorage.setItem(key, newTheme);
        setTheme(newTheme); // 手动更新状态
        createStorageEvent(key, newTheme); // 手动触发事件监听
    };

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent | Event) => {
            console.log(123213)
            const eventKey = (event as any).key;
            if (eventKey === key) {
                setTheme((event as any).newValue || localStorage.getItem(key));
            }
        };

        // 监听跨标签页的 storage 变化
        window.addEventListener('storage', handleStorageChange);
        // 监听同一页面的手动触发事件
        window.addEventListener('local-storage-change', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('local-storage-change', handleStorageChange);
        };
    }, [key]);

    return [theme, setLocalStorageTheme] as const; // 返回当前主题和设置函数
}

export default useThemeListener;