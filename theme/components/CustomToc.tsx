import React, {useMemo, useState} from 'react';
import {Toc} from 'rspress/theme'
import {DownOutlined, RightOutlined} from "@ant-design/icons";
import {useWindowSize} from "@uidotdev/usehooks";
import {clsx} from "clsx";

const CustomToc = () => {
    const [isVisible, setIsVisible] = useState(false);
    const size = useWindowSize()
    const isShowToc = useMemo(() => {
        return size.width && size.width > 960 && size.width < 1280
    }, [size])

    const toggleTOC = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div
            className={clsx("sticky top-0 bg-background border-b border-divider -mt-12 mb-9 w-full z-50", isShowToc ? "block" : "hidden")}>
            {/* 切换按钮 */}
            <div
                onClick={toggleTOC}
                className="py-2 px-4 cursor-pointer"
            >
                <div className="flex items-center"><span className="mr-2">Catalogue</span>{isVisible ? <DownOutlined/> :
                    <RightOutlined/>}</div>
            </div>

            {/* TOC 容器 */}
            {isVisible && (
                <div
                    className="absolute bg-background max-h-[600px] overflow-y-scroll top-full left-0 mt-2 shadow-lg rounded p-4">
                    <Toc/>
                </div>
            )}
        </div>
    );
};

export default CustomToc;
