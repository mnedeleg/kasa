import React from 'react';

const UserItem = ({ user }) => {
    return (
        <div key={user.id} className="user-profile">
            <img src={user.picture} />
            <h3> {user.name} </h3>
        </div>
    );
}

export default UserItem;
