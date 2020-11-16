import React from 'react'
import '../../src/styles/Form.css'
const Form = ({ newName, newNumber, addName, handleNumberChange, handleNameChange }) => {


   


    return (
        <div className ="form">

        <h2>Add New Number</h2>
            <form  onSubmit={addName}>
            <ul>
                
                    <li>
                    <label forms="name">Name:</label>
         <input 
                            value={newName}
                            //when user types call handleNameChange to update state
                            onChange={handleNameChange}
                        />
                    </li>
                    <li>
                    <label forms="phonenumber">Phone number:</label>
         <input
                            value={newNumber}
                            //when user types calle handleNumberChange to update state
                            onChange={handleNumberChange}
                        />
                        <button type="submit"> Add contact</button>
                    </li>
              
                </ul>
            </form>

        </div>
    )


}
export default Form