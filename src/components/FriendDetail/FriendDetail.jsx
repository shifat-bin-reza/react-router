import React from 'react';
import "./FriendDetail.css";
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();

    return (
        <div className='friend-container'>
            <h3>{friend.name}</h3>
            <p>Phone: {friend.phone}</p>
            <p>Email: {friend.email}</p>
        </div>
    );
};

export default FriendDetail; <h3>Friend Detail Page</h3>