import React from 'react'
import Profile from './Profile.jsx'
const Header = (props) => {
    return (

        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <span>Header component</span>
                    <Profile/>
                </div>
            </div>
        </div>
    )
}

export default Header;