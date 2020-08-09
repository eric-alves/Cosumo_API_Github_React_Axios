import React from 'react';

const Repos = ({className, title, repos}) => {
    return <div className={className}>
        <h2>{title}</h2>
        <ul>
            {repos.map((rep, index) => {
                return <li key={index}><a href={rep.html_url}>{rep.name}</a></li>
            })}
        </ul>
    </div>
}


Repos.defaultProps = {
    className: '',
    title: ''
}

/* Repos.propTypes = {
    className: React.PropTypes.string,
    title: React.PropTypes.string,
    repos: React.PropTypes.array
} */

export default Repos;