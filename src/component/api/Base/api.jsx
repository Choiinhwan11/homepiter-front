import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

//  토큰 및 권한 헤더 자동 추가
api.interceptors.request.use(
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
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

export default api;
