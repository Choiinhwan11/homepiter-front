import React from 'react';
import styles from '../../css/header/AdminMainMenu.module.css';

const AdminHeaderMenu = () => {
    return (
        <nav className={styles['admin-navbar']}>
            <ul className={styles.menu}>
                <li className={styles['menu-item']}>
                    사용자 관리
                    <ul className={styles.submenu}>
                        <li>사용자 목록</li>
                        <li>권한 설정</li>
                    </ul>
                </li>
                <li className={styles['menu-item']}>
                    카테고리 관리
                    <ul className={styles.submenu}>
                        <li>카테고리 추가</li>
                        <li>카테고리 수정</li>
                    </ul>
                </li>
                <li className={styles['menu-item']}>
                    게시판 관리
                    <ul className={styles.submenu}>
                        <li>공지사항</li>
                        <li>문의사항</li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default AdminHeaderMenu;
