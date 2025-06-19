const adminSidebarMenus = [
    {
        key: 'notice',
        label: '공지',
        to: '/admin/notice/all',
        items: [
            { label: '전체공지', to: '/admin/notice/all' },
            { label: '팀공지', to: '/admin/notice/team' },
            { label: '개별공지', to: '/admin/notice/personal' },
        ],
    },
    {
        key: 'schedule',
        label: '일정관리',
        to: '/admin/schedule/personal',
        items: [
            { label: '개인일정관리', to: '/admin/schedule/personal' },
            { label: '팀 일정관리', to: '/admin/schedule/team' },
            { label: '회사 일정관리', to: '/admin/schedule/company' },
        ],
    },
    {
        key: 'category',
        label: '카테고리 수정',
        to: '/admin/category/parentscategory',
        items: [
            { label: '대표 카테고리 수정', to: '/admin/category/parentscategory' },
            { label: '부속 카테고리 수정', to: '/admin/category/childcategory' },
        ],
    },
    {
        key: 'partner',
        label: '거래처',
         to: '/admin/partner/list',
        items: [
            { label: '거래처 리스트', to: '/admin/partner/list' },
            { label: '거래처 등록', to: '/admin/partner/register' },
            { label: '거래처 삭제', to: '/admin/partner/delete' },
        ],
    },
];

export default adminSidebarMenus;
