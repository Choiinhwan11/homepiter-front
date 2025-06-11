import React from 'react';
import MainHeaderLogo from "./MainHeaderLogo";
import MainHeaderLogin from "./MainHeaderLogin";
import MainHeaderNotification from "./MainHeaderNotification";
import MainHeaderCalendar from "./MainHeaderCalendar";
import MainHeaderMyPage from "./MainHeaderMyPage";
import MainHeaderMenu from "./MainHeaderMenu";
import '../header/CSS/MainBasicHeader.css';



const MainBasicHeader = () => {
    return (
        <div className="MainHeaderDIV">

            <MainHeaderLogo />
            
            <div className='MainHeaderIcon'>
            <MainHeaderNotification/>
            <MainHeaderCalendar/>
            <MainHeaderMyPage/>
            </div>
            <MainHeaderLogin/>
            <MainHeaderMenu/>


        </div>
    );
};

export default MainBasicHeader;