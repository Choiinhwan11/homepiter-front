import React, { useState } from 'react';

const CategoryParents = () => {
    const [categories, setCategories] = useState([
        { id: 1, name: '전자제품' },
        { id: 2, name: '가구' },
        { id: 3, name: '생활용품' },
    ]);

    const [newCategory, setNewCategory] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    // 추가
    const handleAddCategory = () => {
        if (!newCategory.trim()) return;
        const newItem = { id: Date.now(), name: newCategory };
        setCategories((prev) => [...prev, newItem]);
        setNewCategory('');
    };

    // 삭제
    const handleDelete = (id) => {
        setCategories((prev) => prev.filter((cat) => cat.id !== id));
    };

    // 수정 시작
    const handleEdit = (id, currentName) => {
        setEditingId(id);
        setEditText(currentName);
    };

    // 수정 저장
    const handleSaveEdit = (id) => {
        if (!editText.trim()) return;
        setCategories((prev) =>
            prev.map((cat) => (cat.id === id ? { ...cat, name: editText } : cat))
        );
        setEditingId(null);
        setEditText('');
    };

    return (
        <div style={{ display: 'flex', padding: '30px', gap: '40px' }}>
            {/* 왼쪽 목록 */}
            <div style={{ flex: 1 }}>
                <h2>대표 카테고리 목록</h2>
                <ul>
                    {categories.map((cat) => (
                        <li key={cat.id} style={{ marginBottom: '10px' }}>
                            {editingId === cat.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                    />
                                    <button onClick={() => handleSaveEdit(cat.id)} style={{ marginLeft: '5px' }}>
                                        저장
                                    </button>
                                </>
                            ) : (
                                <>
                                    {cat.name}
                                    <button onClick={() => handleEdit(cat.id, cat.name)} style={{ marginLeft: '10px' }}>
                                        수정
                                    </button>
                                    <button onClick={() => handleDelete(cat.id)} style={{ marginLeft: '5px' }}>
                                        삭제
                                    </button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* 오른쪽 추가 폼 */}
            <div style={{ flex: 1 }}>
                <h2>카테고리 추가</h2>
                <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="카테고리 이름"
                />
                <button onClick={handleAddCategory} style={{ marginLeft: '10px' }}>
                    추가
                </button>
            </div>
        </div>
    );
};

export default CategoryParents;
