import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainHeaderLogo = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div>
            <image onClick={handleLogoClick} className="MainHomeLogo" style={{ cursor: 'pointer' }}>로고</image>
        </div>
    );
};

export default MainHeaderLogo;
