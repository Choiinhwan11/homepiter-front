import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";

const MainHeaderMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div style={{ position: 'relative' }}>
            {/* Menu Icon */}
            <IoIosMenu onClick={toggleMenu} className='MainHeaderHenu' />

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '40px',
                        left: '0',
                        
                        backgroundColor: '#fff',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        padding: '10px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        zIndex: '1000',
                    }}
                >
                    <p style={{margin: '5px 0', cursor: 'pointer'}}>1. 정보 확인</p>
                    <p style={{margin: '5px 0', cursor: 'pointer'}}>2. 내역</p>
                    <p style={{margin: '5px 0', cursor: 'pointer'}}>3. 광심업체</p>
                    <p style={{margin: '5px 0', cursor: 'pointer'}}>4. 관리 문의  </p>
                </div>
            )}
        </div>
    );
};

export default MainHeaderMenu;