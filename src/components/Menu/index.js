import React from 'react';
import './index.scss';
function Menu(props) {
    return (
        <div className="menu-container">
            <ul>
                <li> Projects </li>
                <li> Tasks </li>
                <li> Goals </li>
                <li> Logout </li>

            </ul>
        </div>
    );
}

export default Menu;