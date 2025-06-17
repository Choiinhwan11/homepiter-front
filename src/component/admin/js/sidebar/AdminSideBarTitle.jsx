import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminSideBarTitle = () => {
    // 열림 여부를 저장하는 상태
    const [openMenus, setOpenMenus] = useState({
        notice: false,
        schedule: false,
        partner: false,
    });

    // 열기/닫기 토글 함수
    const toggleMenu = (menu) => {
        setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
    };

    return (
        <div style={{ width: '220px', backgroundColor: '#333', color: '#fff', padding: '20px' }}>
            <h1 style={{ fontSize: '18px', marginBottom: '10px' }}>관리자 메뉴</h1>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0 }}>

                    {/* 공지 */}
                    <li>
                        <span onClick={() => toggleMenu('notice')} style={{ cursor: 'pointer' }}>
                            {openMenus.notice ? '▼' : '▶'} 공지
                        </span>
                        {openMenus.notice && (
                            <ul style={{ paddingLeft: '20px' }}>
                                <li><Link to="/admin/notice/all" style={{ color: '#fff' }}>전체공지</Link></li>
                                <li><Link to="/admin/notice/team" style={{ color: '#fff' }}>팀공지</Link></li>
                                <li><Link to="/admin/notice/personal" style={{ color: '#fff' }}>개별공지</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* 일정관리 */}
                    <li>
                        <span onClick={() => toggleMenu('schedule')} style={{ cursor: 'pointer' }}>
                            {openMenus.schedule ? '▼' : '▶'} 일정관리
                        </span>
                        {openMenus.schedule && (
                            <ul style={{ paddingLeft: '20px' }}>
                                <li><Link to="/admin/schedule/personal" style={{ color: '#fff' }}>개인일정관리</Link></li>
                                <li><Link to="/admin/schedule/team" style={{ color: '#fff' }}>팀 일정관리</Link></li>
                                <li><Link to="/admin/schedule/company" style={{ color: '#fff' }}>회사 일정관리</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* 거래처 */}
                    <li>
                        <span onClick={() => toggleMenu('partner')} style={{ cursor: 'pointer' }}>
                            {openMenus.partner ? '▼' : '▶'} 거래처
                        </span>
                        {openMenus.partner && (
                            <ul style={{ paddingLeft: '20px' }}>
                                <li><Link to="/admin/partner/list" style={{ color: '#fff' }}>거래처 리스트</Link></li>
                                <li><Link to="/admin/partner/register" style={{ color: '#fff' }}>거래처 등록</Link></li>
                                <li><Link to="/admin/partner/delete" style={{ color: '#fff' }}>거래처 삭제</Link></li>
                            </ul>
                        )}
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default AdminSideBarTitle;
