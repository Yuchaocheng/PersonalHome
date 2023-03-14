import { defineConfig } from '@ice/app';
import store from '@ice/plugin-store';
import request from '@ice/plugin-request';

// The project config, see https://v3.ice.work/docs/guide/basic/config
const minify = process.env.NODE_ENV === 'production' ? 'swc' : false;
export default defineConfig(() => ({
  // Set your configs here.
  minify,
  plugins: [
    request(),
    store(),
  ],
  proxy: {
    '/api': {
      target: 'https://127.0.0.1:3000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  externals: {
    lodash: '_',
    moment: 'moment',
    react: 'React',
    'react-dom': 'ReactDOM',
    '@alifd/next': 'Next',
  },
  routes: {
    ignoreFiles: [
      '**/components/**', // 如果每个页面下有 components 目录存放当前页面的组件，可以通过添加此配置忽略被解析成路由组件
    ],
  },
  ssr: false,
  ssg: false,
  publicPath: 'PersonalHome',
}));
