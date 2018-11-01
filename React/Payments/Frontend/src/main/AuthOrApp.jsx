import '../common/template/dependencies';

import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from './App';
import Auth from '../Auth/Auth';

import { validateToken } from '../Auth/AuthActions';

class AuthOrApp extends Component {
  componentWillMount() {
    if (this.props.auth.user) {
      this.props.validateToken(this.props.auth.user.token);
    }
  }

  render() {
    const { user, validToken } = this.props.auth;
    if (user && validToken) {
      axios.defaults.headers.common.authorization = user.token;
      return <App>{this.props.children}</App>;
    }
    if (!user && !validToken) {
      return <Auth />;
    }
    return false;
  }
}

const mapStateToProps = state => ({ auth: state.auth });

const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthOrApp);
