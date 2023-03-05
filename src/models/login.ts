import { createModel } from 'ice';
interface login {
    sid: string;
}

export default createModel({
    // 定义  model 的初始 state
    state: {
      // sid: localStorage.getItem('sid'),
      sid: '',
    } as login,
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
        this.update({
          sid: 'taobao',
        });
      },
    }),
  })