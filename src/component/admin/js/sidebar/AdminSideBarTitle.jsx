import React from 'react';

const AdminSideBarTitle = () => {
    return (
        <div>
            <h1>side bar ul li </h1>
            <nav>
                <ul>
                    <li>
                        공지
                        <ul>
                            <li>전체공지</li>
                            <li>팀공지</li>
                            <li>개별공지</li>
                        </ul>
                    </li>
                    <li>
                        일정관리
                        <ul>
                            <li>개인일정관리</li>
                            <li>팀 일정관리 </li>
                            <li>회사 일정관리 </li>
                        </ul>
                    </li>
                    <li>
                        거래처
                        <ul>
                            <li>거래처 리스트</li>
                            <li>거래처 등록</li>
                            <li>거래처 삭제 </li>
                        </ul>
                    </li>
                    <li>
                        직원 관리
                        <ul>
                            <li>직위해지</li>
                        </ul>
                    </li>
                    <li>
                        메신저
                        <ul>
                            <li>개인메신져</li>
                            <li>팀 메신저</li>
                        </ul>
                    </li>
                    <li>
                        사용자 관리
                        <ul>
                            <li>영정관리</li>
                        </ul>
                    </li>
                    <li>신고관리
                        <ul>
                            <li>신고관리</li>
                        </ul>
                    </li>
                </ul>



            </nav>
        </div>
    );
};

export default AdminSideBarTitle;