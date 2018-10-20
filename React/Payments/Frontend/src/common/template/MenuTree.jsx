import React from 'react';

export default ({ icon, label, children }) => (
  <li className="treeview">
    <a href>
      <i className={`fa fa-${icon}`} />
      &nbsp;
      {label}
      <i className="fa fa-angle-right pull-right" />
    </a>
    <ul className="treeview-menu">{children}</ul>
  </li>
);
