import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NarBar = () => {
  return (
    <div className="nav">
      <NavLink to="/" activeClassName="active" exact>Home</NavLink>
      <NavLink to="/table" activeClassName="active">Table</NavLink>
      <NavLink to="/fixtures" activeClassName="active">Fixtures</NavLink>
    </div>
  )
}

export default NarBar;