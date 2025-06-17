import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeaderMain from './header/AdminHeaderMain'
import AdminSideBarTitle from './sidebar/AdminSideBarTitle';

const AdminLayout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

            {/*해더*/}
            <AdminHeaderMain />

            {/*사이드바 */}
            <div style={{ display: 'flex', flex: 1 }}>
                <AdminSideBarTitle />
                <div style={{ flex: 1, padding: '20px', backgroundColor: '#f4f4f4' }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
