import React from 'react';

import UsernameBadge from '../UsernameBadge';
import Menu from '../Menu';
import './index.scss';

function Sidebar(props) {
    const username = "Akash Bhandwalkar";
    return (
        <div className="sidebar-container">
            <div className="company-container">
                <div className="username-badge">
                    <UsernameBadge name = {username} />
                </div>
                <div className="company-info">
                    <div className="name">
                        Akash Bhandwalkar
                    </div>
                    <div className="contact">
                        abakash02@gmail.com
                    </div>
                </div>
            </div>
            <div className="menu-container">
                <Menu>

                </Menu>
            </div>
        
        </div>
    );
}

export default Sidebar;