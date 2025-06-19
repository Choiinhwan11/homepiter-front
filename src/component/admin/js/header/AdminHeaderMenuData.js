const adminHeaderMenus = [
    {
        key: 'user',
        label: '사용자 관리',
        items: [
            { label: '사용자 목록', to: '/admin/user/list' },
            { label: '권한 설정', to: '/admin/user/role' },
        ],
    },
    {
        key: 'category',
        label: '카테고리 관리',
        items: [
            { label: '카테고리 추가', to: '/admin/category/add' },
            { label: '카테고리 수정', to: '/admin/category/edit' },
            { label: '카테고리 삭제', to: '/admin/category/delete' }
        ],
    },
    {
        key: 'board',
        label: '게시판 관리',
        items: [
            { label: '공지사항', to: '/admin/board/notice' },
            { label: '문의사항', to: '/admin/board/qna' },
        ],
    },
    {
        key: 'report',
        label: '신고관리',
        items: [
            { label: '업체 신고', to: '/admin/report/busniess' },
            { label: '회원 신고', to: '/admin/report/user' },
        ],
    },
];

export default adminHeaderMenus;
