import React from 'react'

const PhoneNumber = ({ name, phoneNumber, remove, id }) => {
    return (
        
       <li> <p>{name} </p>
       <p>{phoneNumber}</p>
        <button onClick={() => remove(id)}>delete</button></li>
                  
        
    )
}

export default PhoneNumber