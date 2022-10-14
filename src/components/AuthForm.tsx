import { Button, Form, Input } from 'antd';
import React, {useState} from 'react';

import {useActions, useAppSelector} from "../hooks/reduxHooks";

const AuthForm: React.FC = () => {
    const { login } = useActions();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {error, isLoading} = useAppSelector(state => state.Auth);

    const onFinish = () => {
        login({username, password})
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            {error && error}
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input value={username} onChange={(e) => setUsername(e.target.value)}/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{marginTop: "auto"}}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AuthForm;