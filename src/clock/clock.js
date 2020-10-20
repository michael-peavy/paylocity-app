import React, { useEffect } from 'react';
import UserList from './UserList';
import UserDetail from './UserDetail';
import { Router, Link, navigate } from '@reach/router';
import { getActiveUser, login, logout } from './ApiService';
import Login from './Login';
import ActiveUserContext from './ActiveUserContext';
import './style.css'


window.login = login;
window.logout = logout;
window.getActiveUser = getActiveUser;

const clock = () => {


    const checkForActiveUser = () => {

    };

    const handleLogout = () => {

    };

    checkForActiveUser();

    return (
            <div>
                    <Link to='/home'  onClick={''}>

                      <div className='container2'>
                      <div className='container'>
                        <h1 className='hover'>Punch Log</h1>
                        <p >Lvl.9</p>
                        </div>
                        </div>
                    </Link>




                <div className="app-content">
                    <Router>

                            <>
                                <UserList path="/home" />
                                <UserDetail path="/user/:id" />
                            </>

                    </Router>
                </div>
            </div>
    );
};

export default clock;
