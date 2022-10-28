import React from 'react';
import users from "../data/user.json"
import UserItem from './UserItem';

const Index = () => {
    return (
        <div>
            {users.map((user) => <UserItem key={user.id} user={user}  /> )}
        </div>
    );
}

export default Index;
