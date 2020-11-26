import { createAsyncThunk, createEntityAdapter, createSelector, createSlice, EntityState } from '@reduxjs/toolkit';
import { User } from '@app/models';
import { userService } from '@app/services';

import { AppState } from '.';

export const USER_FEATURE_KEY = 'user';
export interface UserState extends EntityState<User> {
  loading: boolean;
}

const userAdapter = createEntityAdapter<User>({
  selectId: user => user.id,
});

export const createInitialState = (): UserState =>
  userAdapter.getInitialState({
    loading: false,
  });

export const doFetchAllUsers = createAsyncThunk('userAPI/fetchAllUsers', async () => ({
  users: await userService.getAllUsers(),
}));

const userSlice = createSlice({
  name: USER_FEATURE_KEY,
  initialState: createInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(doFetchAllUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(doFetchAllUsers.fulfilled, (state, action) => {
      userAdapter.addMany(state, action.payload.users);
      state.loading = false;
    });
  },
});

const selectUserFeature = (state: AppState) => state[USER_FEATURE_KEY];
const { selectAll, selectById } = userAdapter.getSelectors();
export const selectLoading = createSelector(selectUserFeature, userState => userState.loading);
export const selectAllUsers = createSelector(selectUserFeature, selectAll);
export const selectUserById = (id: number) => createSelector(selectUserFeature, userState => selectById(userState, id));

const { reducer } = userSlice;
export default reducer;
