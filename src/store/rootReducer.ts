import { combineReducers } from '@reduxjs/toolkit';

import postReducer, * as fromPost from './postSlice';
import userReducer, * as fromUser from './userSlice';

const rootReducer = combineReducers({
  [fromPost.POST_FEATURE_KEY]: postReducer,
  [fromUser.USER_FEATURE_KEY]: userReducer,
});

export { fromPost, fromUser };
export default rootReducer;
