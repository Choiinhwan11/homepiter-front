import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {deleteAuthToken, getAuthToken} from "../../cookie/Cookies";

const MainHeaderLogin = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //  컴포넌트가 마운트될 때 로그인 여부 확인
    useEffect(() => {
        const token = getAuthToken();
        setIsLoggedIn(!!token);
    }, []);

    //  로그인 페이지로 이동
    const handleLoginClick = () => {
        navigate('/login');
    };

    //  로그아웃 처리
    const handleLogoutClick = async () => {
        async function logoutUser() {

        }

        try {
            await logoutUser();
            deleteAuthToken();
            setIsLoggedIn(false);
            navigate('/'); // 홈으로 이동
        } catch (error) {
            console.error(' 로그아웃 실패:', error);
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <p onClick={handleLogoutClick} className="MainHeaderLogin">로그아웃</p>
            ) : (
                <p onClick={handleLoginClick} className="MainHeaderLogin">로그인/회원가입</p>
            )}
        </div>
    );
};

export default MainHeaderLogin;
