import React, { useEffect } from 'react';
import { Form, Input } from '@alifd/next';
import { PortalProps } from './type';
import { useRequest } from 'ice';
import { getCaptcha } from '@/service/login';
import classNames from 'classnames/bind';
import style from './index.module.less';

const cx = classNames.bind(style);

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    fixedSpan: 8,
  },
  wrapperCol: {
    span: 14,
  },
};
export const Portal = (props: PortalProps) => {
  const { data, request } = useRequest(getCaptcha);
  useEffect(() => {
    request();
  }, []);
  return (
    <Form style={{ width: '60%' }} {...formItemLayout} colon>
      <FormItem name="baseUser" label="用户名" required requiredMessage="请输入用户名">
        <Input />
      </FormItem>
      <FormItem name="basePass" label="密码" required requiredMessage="请输入密码">
        <Input.Password placeholder="请输入密码" />
      </FormItem>
      <FormItem name="baseUser" label="验证码" required requiredMessage="请输入验证码">
        <div style={{ display: 'flex' }} className={cx('captcha')}>
          <Input className={cx('captcha-input')} />
          <span dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      </FormItem>
    </Form>
  );
};
