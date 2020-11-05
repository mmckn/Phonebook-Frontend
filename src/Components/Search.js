import React, { useState } from 'react'
import PhoneNumber from './PhoneNumber'
const Search = ({ searchString, handleSearchChange, searchResults, remove }) => {

    //when user types call handleSearchChange to update state  
    return (
        <ul>

            <input placeholder="search" value={searchString} onChange={handleSearchChange} />

            { searchResults.map(number =>
                <PhoneNumber style={{'margin-top':50}} key={number.id} id={number.id} name={number.name} phoneNumber={number.phoneNumber} remove={remove}
                />
            )
            }
        </ul>

    )
}
export default Search