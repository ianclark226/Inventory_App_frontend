import { Form, Input } from 'antd';
import React from 'react';

import Auth from '../components/Auth';

const LoginPage = () => {
    return (
        <Auth titleText='Sign In'>
            <Form.Item label="Password">
                <Input placeholder="input placeholder" type="password" />
            </Form.Item>
        </Auth>
    )
}

export default LoginPage;