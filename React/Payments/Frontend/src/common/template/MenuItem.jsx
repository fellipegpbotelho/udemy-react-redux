import React from 'react';
import { Link } from 'react-router';

export default ({ path, icon, label }) => (
  <li>
    <Link to={path}>
      <i className={`fa fa-${icon}`} />
      &nbsp;
      <span>{label}</span>
    </Link>
  </li>
);
