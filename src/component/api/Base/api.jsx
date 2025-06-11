import React from 'react';
import axios from "axios";



//header 에 token 이 필요 없는 경우 axios 보내기
const api =axios.create ({

    baseURL: 'http://localhost:3000',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})


//token필요 경우
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

//login page gogogogogogogogo
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error);

        return Promise.reject(error);
    }
);


export default api;