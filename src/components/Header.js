import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Header = () => (
    <header>
        <Link to="/"><h1>Expensify</h1></Link> 
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>                       
    </header>
);

export default Header;