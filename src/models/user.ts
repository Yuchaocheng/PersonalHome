import { createModel } from 'ice';
interface User {
    name: string;
    sid: string;
}

export default createModel({
    // 定义  model 的初始 state
    state: {
      name: '',
      sid: '',
    } as User,
    // 定义改变该 model 状态的纯函数
    reducers: {
      update(state, payload) {
        return {
          ...state,
          ...payload,
        };
      },
    },
    // 定义处理该 model 副作用的函数
    effects: (dispatch) => ({
      async getUserInfo() {
        await delay(1000);
        this.update({
          name: 'taobao',
          id: '123',
        });
      },
    }),
  })