import React from 'react';
import { useRequest, history } from 'ice';
import classNames from 'classnames/bind';
import { Form, Input, Field, Notification, Button } from '@alifd/next';
import { login } from '@/service/login';
import styles from './index.module.less';
import store from '@/store';
import { Captcha } from '@/components/portal/captcha';

const cx = classNames.bind(styles);


const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    fixedSpan: 8,
  },
  wrapperCol: {
    span: 14,
  },
};

export interface LoginProps {
}
const  loginSuccess = ()=>{
  history?.push('/portal/register')
}

const loginError = (error)=>{
  console.log(error, 'error');
  
  Notification.error({
    title: "登录失败",
    content: error?.errorMsg || "登录失败",
  });
}
export const Login = (props: LoginProps) => {
    const { request:loginReq } = useRequest(login,{onSuccess: loginSuccess,onError: loginError});
    const [userState] = store.useModel('login')
    const field = Field.useField();


    const handleSubmit = (formValue,errors,bb)=>{
        if (errors) {
            return
        }
        loginReq({...formValue,sid: userState.sid})
    }
  return (
  <div className={cx('login')}>  
    <Form style={{ width: '60%' }} {...formItemLayout} colon>
        <FormItem name="username" label="用户名" required requiredMessage="请输入用户名">
            <Input />
        </FormItem>
        <FormItem name="password" label="密码" required requiredMessage="请输入密码">
            <Input.Password placeholder="请输入密码" />
        </FormItem>
        <FormItem name="captcha" label="验证码" required requiredMessage="请输入验证码">
          <Input addonAfter={<Captcha />} />
         </FormItem>
         <FormItem label=" " colon={false}>
          <Form.Submit
            type="primary"
            validate
            onClick={handleSubmit}
          >
            登录
          </Form.Submit>
          <Button type='secondary' style={{marginLeft: "20px"}} text onClick={()=>{  history?.push('/portal/register')}}>去注册</Button>
        </FormItem>
    </Form>
    </div>
);
};

export default Login