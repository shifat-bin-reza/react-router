import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();

    return (
        <div>
            <h1>This is the friends page.</h1>
            <div>
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;