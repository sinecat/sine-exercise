import React, {Component, ComponentType} from 'react';
import './SineCard.less'
import {RightCircleOutlined} from "@ant-design/icons";

const SineCard = ({title, className,icon}: { title: string, className?: string, icon: React.ReactNode }) => {
    return (
        <div className={"card lg:h-[100px] h-fit " + className}>
            <div className="pl-4 flex items-center">
                {icon}
            </div>
            <div className="text">
                <span>{title}</span>
            </div>
        </div>
    );
};

export default SineCard;
