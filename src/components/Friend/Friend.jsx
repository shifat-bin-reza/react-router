import React from 'react';
import "./Friend.css";
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    // console.log(friend);
    const { id, name, phone, email } = friend;
    return (
        <div className='friend-container'>
            <h3>{name}</h3>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <button><Link to={`/friend/${id}`}>Show me details</Link></button>
        </div>
    );
};

export default Friend;