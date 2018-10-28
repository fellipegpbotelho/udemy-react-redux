import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm } from 'redux-form';

import { showTabs, selectTab } from '../common/tab/TabActions';

const BASE_URL = 'http://localhost:3003/api';

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request,
  };
}

export function create(values) {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/billingCycles`, values)
      .then((response) => {
        toastr.success('Sucesso.', 'Ciclo de pagamento cadastrado com sucesso!');
        dispatch([
          resetForm('BillingCycleForm'),
          getList(),
          selectTab('tabList'),
          showTabs('tabList', 'tabCreate'),
        ]);
      })
      .catch((error) => {
        error.response.data.errors.forEach(error => toastr.error('Erro.', error));
      });
  };
}

export function showUpdate(billingCycle) {
  return [showTabs('tabUpdate'), selectTab('tabUpdate')];
}
