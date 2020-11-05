import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {


    const [term, setTerm] = useState("");  // state, setState()

//useEffect()
    useEffect(
        () => {
                //Action to perform
            const search = async function() {
                const response = await axios.get("https://en.wikipedia.org/w/api.php" , {
                    params : {
                        action: "query",
                        list: "search",
                        origin: '*',
                        format: 'json',
                        srsearch: term

                    }
                });
                console.log(response.data.query.search)
            }
            if(term) {
                search();
            }

        },[term]
         // optional Array ==> nothing  [] [state]

    )


    return(
        <div className="ui two column centered grid">
            <div className="column">
                <div className="ui form">
                    <div className="field">
                        <label>Enter Search Term</label>
                        <input
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            className="input"
                        />
                    </div>

                </div>
                <div className="ui celled-list">
                    {term}
                </div>
            </div>
        </div>
    )
}

export default App;