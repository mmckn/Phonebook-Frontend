import React, { useState } from 'react'

const PhoneNumber = ({ name, phoneNumber, remove, id }) => {
    return (
        
       <li> {name} {phoneNumber} <button onClick={() => remove(id)}>delete</button></li>
                  
        
    )
}

export default PhoneNumber