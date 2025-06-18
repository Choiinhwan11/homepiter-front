import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/header/AdminMainMenu.module.css';
import adminHeaderMenus from './AdminHeaderMenuData';

const AdminHeaderMenu = () => {
    return (
        <nav className={styles['admin-navbar']}>
            <ul className={styles.menu}>
                {adminHeaderMenus.map((menu) => (
                    <li key={menu.key} className={styles['menu-item']}>
                        {menu.label}
                        <ul className={styles.submenu}>
                            {menu.items.map((item) => (
                                <li key={item.to}>
                                    <Link to={item.to} className={styles['submenu-link']}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default AdminHeaderMenu;
