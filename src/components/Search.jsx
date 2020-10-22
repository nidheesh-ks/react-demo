import React, {useState} from 'react'


const Search = () => {

    const [term, setTerm] = useState("");
    const [category, setCategory] = useState("");

    const handleOnChangeEvent = (event) => {
        setTerm(event.target.value);
        
        fetch('https://en.wikipedia.org/w/api.php?' + new URLSearchParams({
            action:'query', 
            list:'search',
            format:'json',
            origin: '*',
            srsearch: term
        }))
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )

    }

    return (
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term</label>
                <input className="input" value={term} onChange={handleOnChangeEvent} />
            </div>
        </div>
    )
}

export default Search;