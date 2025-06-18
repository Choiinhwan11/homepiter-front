import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import adminSidebarMenus from './AdminSideBarMenuData';

const AdminSideBarTitle = () => {
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (key) => {
        setOpenMenus((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div style={{ width: '220px', backgroundColor: '#333', color: '#fff', padding: '20px' }}>
            <h1 style={{ fontSize: '18px', marginBottom: '10px' }}>관리자 메뉴</h1>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {adminSidebarMenus.map((menu) => (
                        <li key={menu.key}>
              <span
                  onClick={() => toggleMenu(menu.key)}
                  style={{ cursor: 'pointer' }}
              >
                {openMenus[menu.key] ? '▼' : '▶'} {menu.label}
              </span>
                            {openMenus[menu.key] && (
                                <ul style={{ paddingLeft: '20px' }}>
                                    {menu.items.map((item) => (
                                        <li key={item.to}>
                                            <Link to={item.to} style={{ color: '#fff' }}>
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
