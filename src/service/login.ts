import { request } from 'ice';

export const getCaptcha = async () => {
    const resData = await request('/public/getCaptcha');
    return resData.data
}