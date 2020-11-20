import React, {useState} from "react"

import Header from './Header.jsx'

import UserContext from '../contexts/UserContext.jsx'
import ColorContext from '../contexts/ColorContext.jsx'

const App = () => {

    const [name, setName] = useState("John")
    const [color, setColor] = useState("blue")

    return (
        <div className="ui container">
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <span>App component</span>

                        <UserContext.Provider value={name}>
                            <ColorContext.Provider value={color}>
                                <Header/>
                            </ColorContext.Provider>
                        </UserContext.Provider>



                    </div>
                    <div className="extra content">
                        <div className="ui buttons">
                            <div className="ui basic green button" onClick={()=>{setName("David")}}>Login as David</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default App;