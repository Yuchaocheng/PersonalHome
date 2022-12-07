import { request } from 'ice';

export const getCaptcha = async () => {
    const resData = await request('/getCaptcha');
    return resData.data
}