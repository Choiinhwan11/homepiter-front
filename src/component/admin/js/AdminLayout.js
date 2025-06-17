import React from 'react';
import AdminHeaderMain from "./header/AdminHeaderMain";
import {Outlet} from "react-router-dom";

;


const AdminLayout = () => {
    return (
        <div>
            <AdminHeaderMain/>
            <Outlet />

        </div>
    );
};

export default AdminLayout;