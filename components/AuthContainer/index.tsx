'use server'
import React, {useState} from 'react';
import {Button} from 'antd';
import { Tab, Tabs } from 'rspress/theme'
const AuthContainer = (props: { children?: React.ReactNode }) => {
    const {children} = props
    const [auth, setAuth] = useState(true)

    const handleClick = () => {
        setAuth(!auth)
        console.log(children)
    }

    return (
        <>
            <Button type={'primary'} onClick={handleClick}>获得权限</Button>
            <div>
                {auth && children}
            </div>
        </>
    );
};

export default AuthContainer;