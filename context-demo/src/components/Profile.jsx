import React from 'react';
import UserContext from '../contexts/UserContext.jsx';
import ColorContext from '../contexts/ColorContext.jsx';

/*class Profile extends React.Component {

    //static contextType = UserContext;

    render() {
        return(
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <span>Profile component</span>
                        <div>
                            <UserContext.Consumer>
                                { (userName) => {
                                    return <span>Logged in as: {userName}</span>
                                } }
                            </UserContext.Consumer>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}*/
// useSate, useEffect, useRef, useContext

import {useContext} from 'react'

const Profile = () => {

    const userNameWithHook = useContext(UserContext);
    const colorWithHook = useContext(ColorContext);

    return(
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <span>Profile component</span>
                    <div>
                       {/* <ColorContext.Consumer>

                            {(color) =>{
                                 return (<UserContext.Consumer>
                                    { (userName) => {
                                        return <span>Logged in as: {userName} and color is {color}</span>
                                    } }
                                </UserContext.Consumer>)
                            }}

                        </ColorContext.Consumer>*/}
                        <span>Logged in as: {userNameWithHook} and color is {colorWithHook}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Profile