import React, { ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.less';

const cx = classNames.bind(styles);

export interface RegisterProps {
  children: ReactElement[];
}

export default (props: RegisterProps) => {
  const { children } = props;
  return <div className={cx('resigter')}><h1>33333333333</h1></div>;
};
