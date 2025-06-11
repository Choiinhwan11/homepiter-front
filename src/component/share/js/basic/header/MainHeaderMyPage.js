import React from 'react';
import { GoPeople } from "react-icons/go";
import {useNavigate} from "react-router-dom";

const MainHeaderMyPage = () => {
    const navigate = useNavigate();

    const handleIconClick = () => {
        navigate('/myprofile'); // 원하는 경로로 이동
    };

    return (
        <div>
            <GoPeople onClick={handleIconClick} style={{ cursor: 'pointer' }} />
        </div>
    );
};
export default MainHeaderMyPage;