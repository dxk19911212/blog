import axios from 'axios'
import {BASE_URL} from './constant'

// 创建axios实例
const service = axios.create({
    baseURL: BASE_URL,
    timeout: 50000
});

// request拦截器
service.interceptors.request.use(config => {
    return config
}, error => {
    console.log('requestErr: ' + error);
    return Promise.reject(error)
});

// respone拦截器
service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        console.log('responseErr: ' + error);
        return Promise.reject(error)
    });

export default service;
