import { React, useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import { loginFetch } from '../api/getAPI';

import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState(false);

  const navigate = useNavigate()

  const onFinish = async () => {
    const response = await loginFetch(name, email, password)
    if (response.status === 200) {
      const token = await response.json()
      localStorage.setItem('token', token.accessToken)
      setLoginStatus(true)
      navigate('/')
      window.location.reload()
    } else {
      setLoginStatus(false)
    }
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          onChange={e => setName(e.target.value)}
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          onChange={e => setPassword(e.target.value)}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="" style={{ marginLeft: 50 }}>
            Forgot password?
          </a>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button type="primary" htmlType="submit" style={{ marginRight: 50 }}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div >
  )
}