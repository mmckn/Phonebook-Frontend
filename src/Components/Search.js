import React from 'react'
import PhoneNumber from './PhoneNumber'
import '../styles/Search.css'
const Search = ({ searchString, handleSearchChange, searchResults, remove }) => {

    //when user types call handleSearchChange to update state  
    return (
        
        <ul id="records">

            <input placeholder="search by name." value={searchString} onChange={handleSearchChange} />
<div className="flexCards">
            { searchResults.map(number =>
                <PhoneNumber style={{'margin-top':50}} key={number.id} id={number.id} name={number.name} phoneNumber={number.phoneNumber} remove={remove}
                />
            )
            }
            </div>
        </ul>

    )
}
export default Search