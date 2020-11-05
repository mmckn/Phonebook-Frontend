import React from 'react'

const Notification = ({ message, styleType }) => {



    if (message === null)
        return null

    return (
        <div style={styleType}>
            {message}
        </div>
    )

}

export default Notification