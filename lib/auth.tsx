import {verifyCode} from "./bcryptUtils.ts";
import {ACTIVATION_CODE} from "../constant";
import {useUserInfoStore} from "../store/userInfoStore";
import React, {useEffect} from "react";

const Auth = () => {
    const {setCurrentUserInfo} = useUserInfoStore();

    const verifyAuth = async () => {
        const token = localStorage && localStorage.getItem('token')
        if (!token) {
            return false
        }
        const result = await verifyCode(ACTIVATION_CODE, token)
        if (result) {
            setCurrentUserInfo({username: 'sine'})
        }
        return result
    }

    useEffect(() => {
        verifyAuth()
    }, [localStorage]);

    return <></>
}

export default Auth