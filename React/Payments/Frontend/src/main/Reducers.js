import { combineReducers } from 'redux';

import DashboardReducer from '../Dashboard/DashboardReducer';
import TabReducer from '../common/tab/TabReducer';
import BillingCycleReducer from '../BillingCycle/BillingCycleReducer';

const RootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
});

export default RootReducer;
