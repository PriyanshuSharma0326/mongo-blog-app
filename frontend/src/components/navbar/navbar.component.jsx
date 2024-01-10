import React from 'react';
import './navbar.style.scss';

import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {

    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <Link 
                    to='/' 
                    className='nav-link' 
                >
                    {/* <img className='nav-logo' src="" alt="Logo" /> */}
                    <h1 className='nav-title'>Mongo Blog</h1>
                </Link>

                <ul className="nav-links-container">
                    <li>
                        <Link 
                            to='/blogs' 
                            className='nav-link' 
                        >
                            Blogs
                        </Link>
                    </li>

                    {/* <li>
                        <Link 
                            to='/account/bookmarks' 
                            className='nav-link' 
                        >
                            Bookmarks
                        </Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
