import React, { useState, useEffect } from 'react';

import { Form, Input, Button } from 'antd';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

const CheckUserPage = () => {

    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    let location = useLocation();
    let navigate = useNavigate();

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const userRegister = useSelector(state => state.userRegister)
    const { loading, userInfo } = userRegister;

    useEffect(() => {
        if(userInfo){
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const onSubmit = (e) => {
        e.preventDefault();
       
        dispatch(register(email))
        
    }


  return (
    <div className='login'>
    <div className='inner'>
        <div className='header'>
            <h3>Register</h3>
            <h2>Inventory</h2>
        </div>

        <Form
layout="vertical" onSubmit={onSubmit}
>
<Form.Item 
label='Email'
name="email"
rules={[{ required: true, message: 'Please input your email!' }]}

>
<Input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
</Form.Item>


<Form.Item>
<Button  htmlType="submit" type="primary" loading={loading}>
  Submit
</Button>
</Form.Item>
</Form>
<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}></Link>
    </div>
</div>
  )
}

export default CheckUserPage