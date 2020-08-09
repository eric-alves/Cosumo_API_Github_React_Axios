import React from 'react';
import './styles.css'

const Actions = ({ getRepos, getStarred }) => {
    return <div className='actions'>
        <button className='btnAction' onClick={getRepos}>Ver Repositórios</button>
        <button className='btnAction' onClick={getStarred}>Ver Favoritos</button>
    </div>
}

export default Actions;