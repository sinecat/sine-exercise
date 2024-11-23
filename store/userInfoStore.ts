import {create} from "zustand/react";

type UserInfoType = {
    username: string
}

interface UserInfoStateType {
    currentUserInfo: UserInfoType
    setCurrentUserInfo: (userInfo: UserInfoType) => void
}

export const useUserInfoStore = create<UserInfoStateType>((set) => ({
    currentUserInfo: {
        username: '',
    },
    setCurrentUserInfo: (userInfo: UserInfoType) => {
        set(() => ({
            currentUserInfo: userInfo
        }));
    }
}))
