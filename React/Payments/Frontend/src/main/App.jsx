import '../common/template/dependencies';

import React from 'react';

import Header from '../common/template/Header';
import SideBar from '../common/template/SideBar';
import Footer from '../common/template/Footer';
import Messages from '../common/msg/Messages';

export default ({ children }) => (
  <div className="wrapper">
    <Header />
    <SideBar />
    <div className="content-wrapper">{children}</div>
    <Footer />
    <Messages />
  </div>
);
