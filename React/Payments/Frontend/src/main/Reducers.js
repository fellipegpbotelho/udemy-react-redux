import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import DashboardReducer from '../Dashboard/DashboardReducer';
import TabReducer from '../common/tab/TabReducer';
import BillingCycleReducer from '../BillingCycle/BillingCycleReducer';

const RootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  form: FormReducer,
});

export default RootReducer;
