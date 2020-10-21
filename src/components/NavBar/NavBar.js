import React from 'react';
import { Link } from 'react-router-dom';

const NarBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/table">Table</Link>
      </li>
      <li>
        <Link to="/fixtures">Fixtures</Link>
      </li>
    </ul>
  )
}

export default NarBar;