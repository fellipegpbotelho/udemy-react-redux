import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getList } from './BillingClycleActions';

class BillingCycleList extends Component {
  componentWillMount() {
    this.props.getList();
  }

  render() {
    console.log(this.props.list);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.billingCycle.list,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BillingCycleList);
