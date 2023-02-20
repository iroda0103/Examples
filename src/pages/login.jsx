import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAccessToken,getAccessToken } from '../utilits/localStorage';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
function Login() {
    const navigate=useNavigate();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        axios.post("http://167.235.158.238:3001/login",{
           email:values.username,
            password:values.password
        }
        ).then((res)=>{
            console.log("login boldi",res.data.accessToken);
            setAccessToken(res.data.accessToken);
            console.log(localStorage.getItem('accessToken'),'ndjdjsdnjsnjn');
            navigate(-1)
        })
      };
    return <div className='login'>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password" 
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  
    </div>
}
export default Login

