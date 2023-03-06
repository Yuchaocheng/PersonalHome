import React, { useEffect } from 'react';
import { useRequest, history } from 'ice';
import classNames from 'classnames/bind';
import { Form, Input, Field, Notification } from '@alifd/next';
import { getCaptcha, login } from '@/service/login';
import styles from './index.module.less';
import store from '@/store';
import { v4 } from 'uuid'

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
    const { data, request, refresh } = useRequest(getCaptcha);
    const { request:loginReq } = useRequest(login,{onSuccess: loginSuccess,onError: loginError});
    const [userState, userDispatchers] = store.useModel('login')
    const field = Field.useField();

    useEffect(() => {
      let sid = localStorage.getItem('sid');
      if (!sid) {
        sid = v4();
        localStorage.setItem('sid', sid as string);
      }
      userDispatchers.update({ sid });
      request(sid);
    }, []);
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
        <FormItem name="code" label="验证码" required requiredMessage="请输入验证码">
          <Input addonAfter={<span dangerouslySetInnerHTML={{ __html: data }} onClick={refresh} />} />
            {/* <div style={{ display: 'flex' }} className={cx('captcha')}>
                <Input className={cx('captcha-input')} />
                <span dangerouslySetInnerHTML={{ __html: data }} />
            </div> */}
         </FormItem>
         <FormItem label=" " colon={false}>
          <Form.Submit
            type="primary"
            validate
            onClick={handleSubmit}
          >
            登录
          </Form.Submit>
        </FormItem>
    </Form>
    </div>
);
};

export default Login