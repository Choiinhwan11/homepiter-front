import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import adminSidebarMenus from './AdminSideBarMenuData';

const AdminSideBarTitle = () => {
    const [openMenus, setOpenMenus] = useState({});
    const navigate = useNavigate();

    const handleMenuClick = (menu) => {
        // 메뉴 토글 상태 업데이트
        setOpenMenus((prev) => ({
            ...prev,
            [menu.key]: !prev[menu.key],
        }));

        // 메뉴 클릭 시 기본 경로로 이동 (to가 존재할 때만)
        if (menu.to) {
            navigate(menu.to);
        }
    };

    return (
        <div style={{ width: '220px', backgroundColor: '#333', color: '#fff', padding: '20px' }}>
            <h1 style={{ fontSize: '18px', marginBottom: '10px' }}>관리자 메뉴</h1>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {adminSidebarMenus.map((menu) => (
                        <li key={menu.key}>
              <span
                  onClick={() => handleMenuClick(menu)}
                  style={{ cursor: 'pointer', display: 'inline-block', padding: '8px 0' }}
              >
                {openMenus[menu.key] ? '▼' : '▶'} {menu.label}
              </span>
                            {openMenus[menu.key] && (
                                <ul style={{ paddingLeft: '20px' }}>
                                    {menu.items.map((item) => (
                                        <li key={item.to}>
                                            <Link to={item.to} style={{ color: '#fff', display: 'block', padding: '5px 0' }}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default AdminSideBarTitle;
