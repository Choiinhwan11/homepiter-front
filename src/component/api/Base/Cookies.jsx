import axios from 'axios';

//  Axios 기본 인스턴스 생성
const CookiesApi = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

//  쿠키에서 특정 쿠키 값 가져오기
export const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const [cookieName, cookieValue] = cookies[i].split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
};

//  JWT 쿠키(`authToken`) 가져오기
export const getAuthToken = () => {
    return getCookie('authToken');
};

//  JWT 쿠키(`authToken`) 삭제 (로그아웃 시 사용)
export const deleteAuthToken = () => {
    document.cookie = "authToken=; Path=/; Max-Age=0;";
    console.log(" authToken 쿠키 삭제 완료");
};
//  Axios 인스턴스 내보내기
export default api;
