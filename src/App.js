import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from "./component/admin/js/AdminLayout";
import AdminSideBarMain from "./component/admin/js/sidebar/AdminSideBarMain";
import AdminManagementMain from "./component/admin/js/management/AdminManagementMain";



function App() {
    return (
        <Router>
            <Routes>
                {/* Admin service  */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route path="adminsidebarmain" element={<AdminSideBarMain />} />
                    <Route path="adminmanagement" element={<AdminManagementMain/>}/>
                </Route>
                {/*business service */}
                {/*<Route path="/business" element={<BusinessLayout />}>*/}
                {/*</Route>*/}
                {/*/!*User Service*!/*/}
                {/* 루트 페이지 */}
                {/*<Route path="/" element={<div>메인 인덱스 페이지</div>} />*/}
            </Routes>
        </Router>
    );
}

export default App;
