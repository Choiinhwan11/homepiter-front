import React, { useState } from 'react';

const CategoryChild = () => {
    const [childCategories, setChildCategories] = useState([
        { id: 1, parent: '전자제품', name: '스마트폰' },
        { id: 2, parent: '전자제품', name: '노트북' },
        { id: 3, parent: '가구', name: '책상' },
        { id: 4, parent: '가구', name: '의자' },
    ]);

    const [newItem, setNewItem] = useState({ parent: '', name: '' });
    const [editingId, setEditingId] = useState(null);
    const [editItem, setEditItem] = useState({ parent: '', name: '' });

    // 추가
    const handleAdd = () => {
        if (!newItem.parent.trim() || !newItem.name.trim()) return;
        setChildCategories(prev => [
            ...prev,
            { id: Date.now(), parent: newItem.parent, name: newItem.name }
        ]);
        setNewItem({ parent: '', name: '' });
    };

    // 삭제
    const handleDelete = (id) => {
        setChildCategories(prev => prev.filter(item => item.id !== id));
    };

    // 수정 시작
    const handleEdit = (item) => {
        setEditingId(item.id);
        setEditItem({ parent: item.parent, name: item.name });
    };

    // 수정 저장
    const handleSaveEdit = (id) => {
        if (!editItem.parent.trim() || !editItem.name.trim()) return;
        setChildCategories(prev =>
            prev.map(item =>
                item.id === id ? { ...item, parent: editItem.parent, name: editItem.name } : item
            )
        );
        setEditingId(null);
        setEditItem({ parent: '', name: '' });
    };

    return (
        <div style={{padding: '30px'}}>
            <h3>부속 카테고리 추가</h3>
            <div>
                <input
                    placeholder="대표 카테고리명"
                    value={newItem.parent}
                    onChange={(e) => setNewItem(prev => ({...prev, parent: e.target.value}))}
                />
                <input
                    placeholder="부속 카테고리명"
                    value={newItem.name}
                    onChange={(e) => setNewItem(prev => ({...prev, name: e.target.value}))}
                    style={{marginLeft: '10px'}}
                />
                <button onClick={handleAdd} style={{marginLeft: '10px'}}>
                    추가
                </button>
            </div>


            <h2>부속 카테고리 목록</h2>
            <table border="1" cellPadding="10" style={{width: '100%', marginBottom: '30px'}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>대표 카테고리</th>
                    <th>부속 카테고리</th>
                    <th>수정/삭제</th>
                </tr>
                </thead>
                <tbody>
                {childCategories.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        {editingId === item.id ? (
                            <>
                                <td>
                                    <input
                                        value={editItem.parent}
                                        onChange={(e) => setEditItem(prev => ({...prev, parent: e.target.value}))}
                                    />
                                </td>
                                <td>
                                    <input
                                        value={editItem.name}
                                        onChange={(e) => setEditItem(prev => ({...prev, name: e.target.value}))}
                                    />
                                </td>
                                <td>
                                    <button onClick={() => handleSaveEdit(item.id)}>저장</button>
                                </td>
                            </>
                        ) : (
                            <>
                                <td>{item.parent}</td>
                                <td>{item.name}</td>
                                <td>
                                    <button onClick={() => handleEdit(item)}>수정</button>
                                    <button onClick={() => handleDelete(item.id)} style={{marginLeft: '5px'}}>
                                        삭제
                                    </button>
                                </td>
                            </>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>


        </div>
    );
};

export default CategoryChild;
