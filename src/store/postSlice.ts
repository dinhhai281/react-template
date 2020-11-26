import { createAsyncThunk, createEntityAdapter, createSlice, EntityState } from '@reduxjs/toolkit';
import { Post } from '@app/models';
import { postService } from '@app/services';

export const POST_FEATURE_KEY = 'post';
export interface PostState extends EntityState<Post> {
  loading: boolean;
}

const postAdapter = createEntityAdapter<Post>({
  selectId: post => post.id,
});

export const createInitialState = (): PostState =>
  postAdapter.getInitialState({
    loading: false,
  });

export const doFetchAllPost = createAsyncThunk('postAPI/fetchAllPost', async () => {
  return {
    posts: await postService.getAllPost(),
  };
});

const postSlice = createSlice({
  name: POST_FEATURE_KEY,
  initialState: createInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(doFetchAllPost.pending, state => {
      state.loading = true;
    });
    builder.addCase(doFetchAllPost.fulfilled, (state, action) => {
      postAdapter.addMany(state, action.payload.posts);
      state.loading = false;
    });
  },
});

const { reducer } = postSlice;
export default reducer;
