import React, {useState} from 'react';
import {Toc} from 'rspress/theme'
import {DownOutlined, RightOutlined} from "@ant-design/icons";

const CustomToc: React.FC<TOCProps> = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleTOC = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="sticky top-0 bg-background border-b border-divider -mt-12 mb-9 w-full md:block sm:hidden z-50 lg:hidden">
            {/* 切换按钮 */}
            <div
                onClick={toggleTOC}
                className="py-2 px-4 cursor-pointer"
            >
                <div className="flex items-center"><span className="mr-2">Catalogue</span>{isVisible ? <DownOutlined /> : <RightOutlined />}</div>
            </div>

            {/* TOC 容器 */}
            {isVisible && (
                <div className="absolute bg-background max-h-[600px] overflow-y-scroll top-full left-0 mt-2 shadow-lg rounded p-4">
                    <Toc/>
                </div>
            )}
        </div>
    );
};

export default CustomToc;
