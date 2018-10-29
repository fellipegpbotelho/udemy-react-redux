import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';

import LabelAndInput from '../common/form/LabelAndInput';

import ItemList from './ItemList';
import Summary from './Summary';

import { init } from './BillingClycleActions';

class BillingCycleForm extends Component {
  calculateSummary() {
    const sum = (t, v) => t + v;
    return {
      sumOfCredits: this.props.credits.map(credit => +credit.value || 0).reduce(sum, 0),
      sumOfDebits: this.props.debts.map(debt => +debt.value || 0).reduce(sum, 0),
    };
  }

  render() {
    const {
      handleSubmit, readOnly, submitClass, submitLabel, init, credits, debts,
    } = this.props;
    const { sumOfCredits, sumOfDebits } = this.calculateSummary();
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={LabelAndInput}
            label="Nome: "
            cols="12 4"
            placeholder="Informe o nome"
            readOnly={readOnly}
          />
          <Field
            name="month"
            component={LabelAndInput}
            type="number"
            label="Mês: "
            cols="12 4"
            placeholder="Informe o mês"
            readOnly={readOnly}
          />
          <Field
            name="year"
            component={LabelAndInput}
            type="number"
            label="Ano: "
            cols="12 4"
            placeholder="Informe o ano"
            readOnly={readOnly}
          />
          <Summary credit={sumOfCredits} debt={sumOfDebits} />
          <ItemList
            cols="12 6"
            readOnly={readOnly}
            list={credits}
            field="credits"
            legend="Créditos"
          />
          <ItemList
            cols="12 6"
            readOnly={readOnly}
            list={debts}
            field="debts"
            legend="Débitos"
            showStatus
          />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${submitClass}`}>
            {submitLabel}
          </button>
          <button type="button" className="btn btn-default" onClick={init}>
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({ form: 'BillingCycleForm', destroyOnUnmount: false })(
  BillingCycleForm,
);

const selector = formValueSelector('BillingCycleForm');

const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts'),
});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BillingCycleForm);
