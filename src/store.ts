import { createStore } from 'ice';
import user from './models/user';

console.log('===createStore', createStore);
export default createStore({ user });