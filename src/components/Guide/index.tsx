import * as React from 'react';
import { Button } from '@alifd/next';
import styles from './index.module.scss';
import { history } from 'ice';

import img from '@/assets/images/bg.jpg';

const Guide = () => {
  return (
    <div className={styles.container}>
      <h1
        onClick={() => {
          history.push('/love');
        }}
      >
        流星雨
      </h1>
      <h1
        onClick={() => {
          window.open('http://127.0.0.1:5500/index2.html');
        }}
      >
        烟花
      </h1>
    </div>
  );
};

export default Guide;
