import { combineReducers } from '@reduxjs/toolkit';

import userReducer, * as fromUser from './userSlice';

const rootReducer = combineReducers({
  [fromUser.USER_FEATURE_KEY]: userReducer,
});

export { fromUser };

export default rootReducer;
