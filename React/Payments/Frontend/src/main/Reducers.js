import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { reducer as ToastrReducer } from 'react-redux-toastr';

import DashboardReducer from '../Dashboard/DashboardReducer';
import TabReducer from '../common/tab/TabReducer';
import BillingCycleReducer from '../BillingCycle/BillingCycleReducer';
import AuthReducer from '../Auth/AuthReducer';

const RootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  form: FormReducer,
  toastr: ToastrReducer,
  auth: AuthReducer,
});

export default RootReducer;
