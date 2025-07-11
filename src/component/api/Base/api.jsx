import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

//  토큰 및 권한 헤더 자동 추가
Api.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('accessToken');
        const userId = sessionStorage.getItem('userId');
        const userRole = sessionStorage.getItem('userRole');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        if (userId) {
            config.headers['X-USER-ID'] = userId;
        }
        if (userRole) {
            config.headers['X-USER-ROLE'] = userRole;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

//  응답 에러 처리
Api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

export default Api;
