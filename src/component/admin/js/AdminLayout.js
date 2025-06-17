import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSideBarTitle from './sidebar/AdminSideBarTitle';
import AdminHeaderMain from "./header/AdminHeaderMain";

const AdminLayout = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>

            <AdminSideBarTitle />
            <div style={{ flex: 1, padding: '20px', background: '#f4f4f4' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
