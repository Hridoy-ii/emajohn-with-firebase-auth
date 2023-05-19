import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const { user, userSignOut } = useContext(AuthContext);
    console.log(user);

    const logOutHandle = () => {
        userSignOut()
            .then(result => { })
            .catch(error => console.log(error.message))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/Orders">Orders</Link>
                <Link to="/Order-Review">Order Review</Link>
                <Link to="/Manage-Inventory">Manage Inventory</Link>


                {
                    user ? <>
                        <span className='mx-3'><small>{user.email}</small></span> <button className='btn btn-outline btn-sm' onClick={logOutHandle}>Sign Out</button>
                    </> : <>
                        <Link to="/signUp">SignUp</Link>
                        <Link to="/Login">Login </Link>
                    </>

                }
            </div>
        </nav>
    );
};

export default Header;