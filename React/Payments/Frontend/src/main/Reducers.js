import { combineReducers } from 'redux';

import DashboardReducer from '../Dashboard/DashboardReducer';

const RootReducer = combineReducers({
  dashboard: DashboardReducer,
});

export default RootReducer;
