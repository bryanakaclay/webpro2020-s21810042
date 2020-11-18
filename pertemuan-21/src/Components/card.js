import React from 'react'

const Card = ({name, username, email, phone}) =>{
    return (
        <div className="card-container">
            <h3>Employee Card</h3>
            <p>~ Name : {name}</p>
            <p>~ Username : {username}</p>
            <p>~ Email : {email}</p>
            <p>~ Phone : {phone}</p>
        </div>
    )
}

export default Card;