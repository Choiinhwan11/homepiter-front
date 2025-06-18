import React from 'react';

import styles from '../../css/header/AdminMainHeader.module.css' ;

import AdminHeaderText from "./AdminHeaderText";
import AdminHeaderMenu from "./AdminHeaderMenu";
import AdminHeaderCategory from "./AdminHeaderCategory";
import AdminHeaderLogo from "./AdminHeaderLogo";

const AdminHeaderMain = () => {
    return (
        <div className={styles.adminHeaderMain}>
            <h1> header main page </h1>
            <AdminHeaderLogo/>
            <AdminHeaderText/>
            <AdminHeaderMenu/>
            <AdminHeaderCategory/>

        </div>
    );
};

export default AdminHeaderMain;