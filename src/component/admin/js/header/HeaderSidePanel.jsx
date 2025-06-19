import React from 'react';
import { Link } from 'react-router-dom';

const HeaderSidePanel = ({ menu, onClose }) => {
    if (!menu) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '250px',
            height: '100%',
            backgroundColor: '#2d3748',
            color: '#fff',
            padding: '20px',
            zIndex: 1000,
            boxShadow: '-2px 0 5px rgba(0,0,0,0.3)'
        }}>
            <button onClick={onClose} style={{ color: 'white', marginBottom: '20px' }}>닫기</button>
            <h3>{menu.label}</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {menu.items.map(item => (
                    <li key={item.to} style={{ margin: '10px 0' }}>
                        <Link to={item.to} style={{ color: 'white' }}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeaderSidePanel;
