import {verifyCode} from "./bcryptUtils";
import {currentCode} from "../constant";
import {useUserInfoStore} from "../modal/userInfoStore";
import React, {useEffect} from "react";

const Auth = () => {
    const {currentUserInfo, setCurrentUserInfo} = useUserInfoStore();
    if (currentUserInfo.username) return <></>

    useEffect(() => {
        const verifyAuth = async () => {
            const token = localStorage && localStorage.getItem('token')
            console.log(token)
            if (!token) {
                return false
            }
            const result = await verifyCode(currentCode, token)
            if (result) {
                setCurrentUserInfo({username: 'sine'})
            }
            return result
        }

        verifyAuth()

    }, [localStorage]);

    return <></>
}

export default Auth