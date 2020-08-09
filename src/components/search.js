import React from 'react';
import './styles.css'

const Search = ({ handleSearch }) => {
    return <div className='search'>
        <input 
            type='search' 
            placeholder='Digite o nome do usuário Github' 
            //onChange={(e) => {console.log('change', e.target.value)}}
            onKeyUp={handleSearch}
        />
    </div>
}

export default Search;