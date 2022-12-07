import { IRouterConfig, lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';
import { Portal } from '@/pages/portal';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Portal,
  },
  // {
  //   path: '/',
  //   component: BasicLayout,
  //   children: [
  //     {
  //       path: '/',
  //       exact: true,
  //       component: Dashboard,
  //     },
  //   ],
  // },
];
export default routerConfig;
