import React from 'react';

export default ({ path, icon, label }) => (
  <li>
    <a href={path}>
      <i className={`fa fa-${icon}`} />
      &nbsp;
      {label}
    </a>
  </li>
);
