import React from 'react';
import Search from './search';
import UserInfo from './user-info';
import Repos from './repos';
import Actions from './actions'

const AppContainer = ({ userinfo, 
                        repos, 
                        starred, 
                        handleSearch, 
                        getRepos,
                        getStarred }) => {
    return <div>
        <Search handleSearch={handleSearch} />
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
        {!!repos.length && <Repos 
            title='Repositório' 
            className='repos'
            repos={repos}/>}
        {!!starred.length && <Repos 
        title='Favoritos' 
        className='starred'
        repos={starred}/>}
    </div>
}

export default AppContainer;