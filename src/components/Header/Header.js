import React from 'react';
import './Header.scss';
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  const title = location.pathname.replace('/', '');
  console.log(location.pathname);

  return (
    <div className="header">
      <div className="content title">{ title || 'Home' }</div>
    </div>
  )
}

export default Header;