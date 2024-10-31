import React, {useEffect, useMemo, useState} from 'react';
import {Button, Card, ConfigProvider, Flex, Form, Image, Input, message, Modal, theme} from "antd";
import {useUserInfoStore} from "../../../modal/userInfoStore.ts";
import {verifyCode} from '../../../lib/bcryptUtils'
import Auth from "../../../lib/auth.tsx";
import {normalizeImagePath, useDark} from "rspress/runtime";

type FormProps = {
    code: string;
}

const UserInfo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {currentUserInfo, setCurrentUserInfo} = useUserInfoStore();
    const [form] = Form.useForm();
    const dark = useDark();


    const isActive = useMemo(() => (
        !!currentUserInfo.username
    ), [currentUserInfo])

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async (formValues: FormProps) => {
        const {code} = formValues;
        const isActive = await verifyCode(code)
        if (isActive) {
            setCurrentUserInfo({username: 'sine'})
            message.success('激活成功');
            handleOk();
            return
        }
        message.error('激活码错误！请加入群组，获取激活码！');
    }

    const handleClickSubmit = () => {
        form.submit();
    }

    return (
        <>
            <Auth/>
            <ConfigProvider
                theme={{
                    algorithm: dark ? theme.darkAlgorithm:theme.defaultAlgorithm,
                }}
            >
                <Button style={{margin: '0 16px'}} onClick={showModal}>{isActive ? '加入' : '激活'}</Button>
                <Modal open={isModalOpen} onCancel={handleCancel} footer={!isActive && [
                    <Button key="submit" type="primary" onClick={handleClickSubmit}>
                        提交
                    </Button>,
                ]}>
                    <Flex style={{marginTop: 40}} justify='center' gap={20}>
                        <Card title={'加入我们'}>
                            <Image
                                width={100}
                                src={normalizeImagePath('/group-code.png')}
                            />
                        </Card>
                        <Card title={'1元爱心充电'}>
                            <Image
                                width={100}
                                src={normalizeImagePath('/collection-code.png')}
                            />
                        </Card>
                    </Flex>
                    {!isActive && <Flex style={{marginTop: 40}} justify='center'>
                        <Form
                            layout={'vertical'}
                            form={form}
                            onFinish={handleSubmit}
                        >
                            <Form.Item label={'激活码：'} name={'code'}>
                                <Input.OTP formatter={(str) => str.toUpperCase()}/>
                            </Form.Item>
                        </Form>
                    </Flex>}
                </Modal>
            </ConfigProvider>
        </>
    );
};

export default UserInfo;