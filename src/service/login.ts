import { request } from 'ice';

export const getCaptcha = async (sid) => {
  console.log('===params', sid);
  const resData = await request.get(`/public/getCaptcha?sid=${sid}`);
  return resData;
};

export const login = async (params) => {
  const resData = await request.post('/login/login', params);
  return resData;
};

export const resigter = async (params) => {
  const resData = await request.post('/login/register', params);
  return resData;
};
