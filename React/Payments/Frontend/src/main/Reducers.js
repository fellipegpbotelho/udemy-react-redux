import { combineReducers } from 'redux';

import DashboardReducer from '../Dashboard/DashboardReducer';
import TabReducer from '../common/tab/TabReducer';

const RootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
});

export default RootReducer;
