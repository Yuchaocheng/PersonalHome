import React, { ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.less';
import { useRequest, history } from 'ice';
import { Form, Input, Field, Notification } from '@alifd/next';
import {  resigter } from '@/service/login';
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

const  registerSuccess = ()=>{
  Notification.success({
    title: "注册成功",
    duration: 1000
  });
  // setTimeout(() => {
  //   history?.push('/portal/login')
  // }, 1000);

}
export interface RegisterProps {
}

export default (props: RegisterProps) => {
  const field = Field.useField();
  const registerError = (error)=>{
    Notification.error({
      title: "注册失败",
      content: error?.errorMsg || "注册失败",
    });
    if (error.data) {
      field.setErrors(error.data)
    }
  }
  const { request:registerReg } = useRequest(resigter,{onSuccess: registerSuccess,onError: registerError});
  const [userState] = store.useModel('login')
  const handleSubmit = (formValue, errors)=>{
    if (errors) {
        return
    }
    delete formValue.password2
    registerReg({
      ...formValue,
      sid: userState.sid
    })
  }
  const validatePass = (rule,value,callback)=>{
    const p2 = field.getValue('password2');
      if (p2 && value !== p2) {
        field.setError('password2', "两次输入密码不一致")
      }
      return callback()
  }
  const validatePass2 = (rule,value,callback)=>{
    const p = field.getValue('password');
      if (p && value !== p) {
        return callback("两次输入密码不一致")
      }
      return callback()
  }
  return (
          <div className={cx('resigter')}>   
            <Form style={{ width: '60%' }} {...formItemLayout} colon field={field}>
              <FormItem name="username" label="用户名" required requiredMessage="请输入用户名" format='email'>
                  <Input />
              </FormItem>
              <FormItem name="name" label="昵称" required requiredMessage="请输入昵称">
                  <Input />
              </FormItem>
              <FormItem name="password" label="密码" required requiredMessage="请输入密码" validator={validatePass}>
                  <Input.Password placeholder="请输入密码" />
              </FormItem>
              <FormItem name="password2" label="确认密码" validator={validatePass2} required requiredMessage="请确认密码">
                  <Input.Password placeholder="请输入确认密码" />
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
                  注册
                </Form.Submit>
              </FormItem>
            </Form>
          </div>
          );
};
