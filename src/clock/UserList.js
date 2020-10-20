import React, { useEffect, useState } from 'react';
import { UserListItem } from './UserListItem';
import { getUsers } from './ApiService';
import LoadingIndicator from './LoadingIndicator';

const UserList = () => {
    const [users, updateUsers] = useState([]);
    const [isLoading, updateLoading] = useState(false);

    useEffect(() => {
        updateLoading(true);
        getUsers()
            .then(updateUsers)
            .catch(() => {
                updateUsers([]);
            })
            .finally(() => updateLoading(false));
    }, []);

    return (
        <div className="user-list">
            <p>hi</p>
            {isLoading && <LoadingIndicator />}
            <ul>
                {users.map((user) => (
                    <UserListItem key={user.id} {...user} />
                ))}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

               <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               <br></br>


            </ul>
        </div>
    );
};

export default UserList;
