import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NarBar = () => {
  return (
    <div className={styles.nav}>
      <NavLink to="/" activeClassName={styles.active} exact>Home</NavLink>
      <NavLink to="/table" activeClassName={styles.active}>Table</NavLink>
      <NavLink to="/fixtures" activeClassName={styles.active}>Fixtures</NavLink>
    </div>
  )
}

export default NarBar;