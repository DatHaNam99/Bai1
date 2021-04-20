import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

function NavItems() {
    return (
        <div>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/product" className="nav-link">Product</Link>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default NavItems;