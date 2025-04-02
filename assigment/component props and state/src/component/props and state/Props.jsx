import React from 'react'

const Props = ({ name, age, location }) => {
    return (
        <>
            <div className="user-card">
                <h2 className="user-name">name: {name}</h2>
                <p className="user-age">Age: {age}</p>
                <p className="user-location">Location: {location}</p>
            </div>
        </>
    )
}

export default Props
