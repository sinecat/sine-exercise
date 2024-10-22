import React from 'react';
import {ButtonProps} from "antd";

const SineButtonContainer = (props: ButtonProps) => {
    const {children, onClick, ...rest} = props;
    return (
        <div
            className="flex bg-white items-center justify-center w-12 h-12 rounded-full shadow-md"
            onClick={onClick}
            {...rest}
        >
            {children}
        </div>
    );
};

export default SineButtonContainer;