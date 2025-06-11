import React from 'react';
import { FaHome, FaBuilding, FaList } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../../user/component/category/css/MainHomeCategory.css'
const MainHomeCategoryIcon = () => {
    const navigate = useNavigate();

    const categories = [
        { id: 1, name: '전체', icon: <FaList />, link: '/category/mercatile' },
        { id: 2, name: '집', icon: <FaHome />, link: '/category/residence' },
        { id: 3, name: '사업장', icon: <FaBuilding />, link: '/category/mercatile' },
    ];

    const handleCategoryClick = (link) => {
        navigate(link);
    };

    return (
        <div className="category-container">
            {categories.map((category) => (
                <div
                    key={category.id}
                    className="category-item"
                    onClick={() => handleCategoryClick(category.link)}
                >
                    <div className="category-icon">{category.icon}</div>
                    <div className="category-name">{category.name}</div>
                </div>
            ))}
        </div>
    );
};

export default MainHomeCategoryIcon;