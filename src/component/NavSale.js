import React, { useState } from 'react';
import '../component/HeaderSale.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler
} from 'reactstrap';
import NavItems from '../component/NavItems';

const NavSale = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const Index = () => <h2>Index</h2>
    const Product = () => <h2>Product</h2>
    const Cart = () => <h2>Cart</h2>
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a className="navbar-brand" href="#"><img class="imgFaceBook" src="https://ios.codevn.net/wp-content/uploads/2018/01/facebook.jpg"></img></a>
                    <form className="form-inline" action="/action_page.php">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <NavItems />
                    </Collapse>
                    <Route path="/" exact component={Index} />
                    <Route path="/product" component={Product} />
                    <Route path="/cart" component={Cart} />
                </nav>
            </div>
        </Router>

    );
}

export default NavSale;