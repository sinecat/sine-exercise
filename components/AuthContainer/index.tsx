import React, {useMemo} from 'react';
import {useUserInfoStore} from "../../modal/userInfoStore";
import './styles.less'
import {Card, Flex, Image, Typography} from "antd";
import {useDark} from 'rspress/runtime';
import { normalizeImagePath } from 'rspress/runtime';

const {Title, Text} = Typography;

const AuthContainer = (props: { children?: any[] }) => {
    const {children} = props
    const {currentUserInfo, setCurrentUserInfo} = useUserInfoStore();
    const dark = useDark();

    const isActive = useMemo(() => (
        !!currentUserInfo.username
    ), [currentUserInfo])

    return (
        <div>
            {isActive ? (
                <div>{children}</div>
            ) : (
                <div>
                    {children?.slice(0, 5)}
                    <div className="rspress-directive">
                        <Flex vertical gap={40} align='center' justify='center'>
                            <Image
                                width={150}
                                preview={{
                                    visible: false,
                                    mask: false
                                }}
                                src={normalizeImagePath('/active_tip.jpg')}
                            />
                            <Flex className='tip-color' vertical align='center'>
                                <Title style={{color: dark ? '#ffffff' : ''}} level={2}>继续观看需要激活</Title>
                                <Title style={{color: '#aaaaaa'}} level={5}>点击右上角激活按钮加入我们获取二维码</Title>
                            </Flex>
                        </Flex>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthContainer;