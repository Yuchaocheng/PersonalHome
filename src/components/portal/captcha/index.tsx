import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.less';
import { useRequest } from 'ice';
import { getCaptcha } from '@/service/login';
import { v4 } from 'uuid';
import store from '@/store';

const cx = classNames.bind(styles);

export interface CaptchaProps {}

export const Captcha = (props: CaptchaProps) => {
  const { data, request, refresh } = useRequest(getCaptcha);
  const [userState, userDispatchers] = store.useModel('login');
  useEffect(() => {
    let sid = userState.sid || localStorage.getItem('sid');
    if (!sid) {
      sid = v4();
      localStorage.setItem('sid', sid as string);
    }
    if (sid !== userState.sid) {
      userDispatchers.update({ sid });
    }
    request(sid);
  }, []);
  return <span className={cx('captcha')} dangerouslySetInnerHTML={{ __html: data }} onClick={refresh} />;
};
