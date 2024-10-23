import React from 'react';
import {ButtonProps} from "antd";
import styles from './style.module.less'

const SineButtonContainer = (props: ButtonProps) => {
    const {children, onClick, ...rest} = props;
    return (
        <div
            className={styles.sineBtnContainer}
            onClick={onClick}
            {...rest}
        >
            {children}
        </div>
    );
};

export default SineButtonContainer;