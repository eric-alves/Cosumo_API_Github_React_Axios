import React from 'react';
//import Repos from './repos';

const UserInfo = ({ userinfo }) => {
    return <div className='user-info'>
        <img alt='User Avatar' src={userinfo.userAvatarURL} />

        <h1 className='username'>
            <a href={`https://github.com/${userinfo.login}`} target="_blank">
                {userinfo.userName}
            </a>
        </h1>

        <ul className='repos-info'>
            <li>Repositórios: {userinfo.reposNum}</li>
            <li>Seguidores: {userinfo.followers}</li>
            <li>Seguindo: {userinfo.following}</li>
        </ul>
    </div>
}

export default UserInfo;