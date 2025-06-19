import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import AdminLayout from "./component/admin/js/AdminLayout";

// Pages - 인덱스, 메인
import AdminManagementIndex from "./component/admin/js/management/AdminManagementIndex";
import AdminManagementMain from "./component/admin/js/management/AdminManagementMain";

// Pages - 사이드바 메뉴
import AdminSideBarMain from "./component/admin/js/sidebar/AdminSideBarMain";

// Pages - 공지
import NoticeAll from "./component/admin/js/notice/NoticeAll";
import NoticeTeam from "./component/admin/js/notice/NoticeTeam";
import NoticePersonal from "./component/admin/js/notice/NoticePersonal";

// Pages - 일정관리
import SchedulePersonal from "./component/admin/js/schedule/SchedulePersonal";
import ScheduleTeam from "./component/admin/js/schedule/ScheduleTeam";
import ScheduleCompany from "./component/admin/js/schedule/ScheduleCompany";

// Pages - 카테고리
import CategoryParents from "./component/admin/js/category/CategoryParents";
import CategoryChild from "./component/admin/js/category/CategoryChild";

// Pages - 거래처
import PartnerList from "./component/admin/js/partner/PartnerList";
import PartnerRegister from "./component/admin/js/partner/PartnerRegister";
import PartnerDelete from "./component/admin/js/partner/PartnerDelete";

function App() {
    return (
        <Router>
            <Routes>

                {/*  관리자 공통 레이아웃 (헤더 + 사이드바 포함) */}
                <Route path="/admin" element={<AdminLayout />}>


                    <Route index element={<AdminManagementIndex />} />


                    <Route path="adminmanagement" element={<AdminManagementMain />} />
                    <Route path="adminsidebarmain" element={<AdminSideBarMain />} />

                    {/*  공지 */}
                    <Route path="notice/all" element={<NoticeAll />} />
                    <Route path="notice/team" element={<NoticeTeam />} />
                    <Route path="notice/personal" element={<NoticePersonal />} />

                    {/*  일정관리 */}
                    <Route path="schedule/personal" element={<SchedulePersonal />} />
                    <Route path="schedule/team" element={<ScheduleTeam />} />
                    <Route path="schedule/company" element={<ScheduleCompany />} />

                    {/*  카테고리 */}
                    <Route path="category/parentscategory" element={<CategoryParents />} />
                    <Route path="category/childcategory" element={<CategoryChild />} />

                    {/*  거래처 */}
                    <Route path="partner/list" element={<PartnerList />} />
                    <Route path="partner/register" element={<PartnerRegister />} />
                    <Route path="partner/delete" element={<PartnerDelete />} />

                </Route>

                {/*  추후 추가: 루트 페이지, 로그인, 비즈니스 영역 등 */}
                {/*
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/business" element={<BusinessLayout />} />
        */}

            </Routes>
        </Router>
    );
}

export default App;
