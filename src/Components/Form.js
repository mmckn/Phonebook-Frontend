import React, { useState } from 'react'

const Form = ({ newName, newNumber, addName, handleNumberChange, handleNameChange }) => {


   


    return (
        <div>
            <form  onSubmit={addName}>
            <ul style={{flex:'flex-outer'}}>
                
                    <li>
                    <label forms="name">Name:</label>
         <input style={{width:'50%'}}
                            value={newName}
                            //when user types call handleNameChange to update state
                            onChange={handleNameChange}
                        />
                    </li>
                    <li>
                    <label forms="phonenumber">Phonenumber:</label>
         <input
                            value={newNumber}
                            //when user types calle handleNumberChange to update state
                            onChange={handleNumberChange}
                        />
                    </li>
                
                <li>
                    <button type="submit"> add </button>
                </li>
                </ul>
            </form>

        </div>
    )


}
export default Form