import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import AdminLayout from "./component/admin/js/AdminLayout";

// Pages
import AdminSideBarMain from "./component/admin/js/sidebar/AdminSideBarMain";
import AdminManagementMain from "./component/admin/js/management/AdminManagementMain";
import AdminManagementIndex from "./component/admin/js/management/AdminManagementIndex";

function App() {
    return (
        <Router>
            <Routes>

                {/*  관리자 영역 */}
                <Route path="/admin" element={<AdminLayout />}>
                    {/* 기본 진입 시 → 관리자 대시보드 또는 홈 */}
                    <Route index element={<AdminManagementIndex />} />

                    {/* 사이드바 내의 라우팅 */}
                    <Route path="adminsidebarmain" element={<AdminSideBarMain />} />
                    <Route path="adminmanagement" element={<AdminManagementMain />} />
                </Route>

                {/*  비즈니스 영역 (예정) */}
                {/*
        <Route path="/business" element={<BusinessLayout />}>
          ...
        </Route>
        */}

                {/* ✅ 루트 페이지 */}
                {/*
        <Route path="/" element={<div>메인 인덱스 페이지</div>} />
        */}

            </Routes>
        </Router>
    );
}

export default App;
