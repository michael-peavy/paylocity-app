import React from 'react';
import { Link } from '@reach/router';
import StatusIndicator from './StatusIndicator';

export const UserListItem = ({ firstName, lastName, company, status, id }) => {
    return (
      <div style={{ marginTop:'40px'}}>
        <li style={{marginLeft:'73px', marginTop:'5px'}}>
            <Link to={`/user/${id}`}>
                <h3>
                    <span>
                        {firstName} {lastName}
                    </span>
                    <StatusIndicator status={status} />
                </h3>
                <div className="stats">
                  <p> In By: 8:30am</p>
                  <p> +12 Punch Points</p>

                </div>

                <p className='stats2'>Week 1</p>
            </Link>
        </li>
        </div>
    );
};
