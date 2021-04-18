import React from 'react';
import './index.scss';
function UsernameBadge(props) {
    // fallback UI
    if(!props.name || !(props.name.replace(/ /g,''))) {
        return (<div className="username-badge-container" style={{
            backgroundColor: 'red'
        }}>
            NA
        </div>)
    }


    let name = props.name.split(' ');

    // TODO: refactor the code
    name = name[0][0] + '' + (name[1] ? name[1][0] : '');
    return (
        <div className="username-badge-container">
            { name }
        </div>
    );
}

export default UsernameBadge;