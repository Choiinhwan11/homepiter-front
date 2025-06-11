import React, { useState } from 'react';
import '../../header/CSS/MainBasicHeaderSearch.css'


function HeaderSearch() {
    const [selectedOption, setSelectedOption] = useState('');
    const [searchInput, setSearchInput] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = () => {
        // if (!selectedOption) {
        //     alert('옵션을 선택하세요.');
        //     return;
        // }
        if (!searchInput) {
            alert('검색어를 입력하세요.');
            return;
        }

        console.log(`Option: ${selectedOption}, Search: ${searchInput}`);
        alert(`검색 완료! 옵션: ${selectedOption}, 검색어: ${searchInput}`);
    };
    return (
        <div>
            
            <div className='MainHeaderSearchDIV'>
                <div className='MainHeaderSearchGard'>
                <select
                    value={selectedOption}
                    onChange={handleOptionChange}
                    className='MainHomeSearch'
                >
                    <option value="">전체</option>
                    <option value="home">집</option>
                    <option value="store">가게</option>
                </select>
                <input
                    className='MainHeaderSearchInput'
                    type="text"
                    placeholder="검색할 것을 입력하세요"
                    value={searchInput}
                    onChange={handleInputChange}
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <button
                    className='MainHeaderHomeSearchButton'
                    onClick={handleSearch}
                >
                    검색하기
                </button>
            </div>
            </div>
        </div>
    );
}

export default HeaderSearch;