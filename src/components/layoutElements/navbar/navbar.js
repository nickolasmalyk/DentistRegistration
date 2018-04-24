import * as React from 'react';

import Login from '../../users/login';
import Signup from '../../users/signup';
import MainMenu from './mainMenu';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        SoftServe Dentistry
                    </a>
                    <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                        &#9776;
                    </button>
                    <div className="collapse navbar-collapse" id="exCollapsingNavbar">
                        <MainMenu />
                        <ul className="nav navbar-nav navbar-right ml-auto">
                        <Signup />
                        <Login />
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}    
export default NavBar;