import { fromPost } from '@app/store';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const PostComponent: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fromPost.doFetchAllPost());
  }, []);
  return <div>Post</div>;
};

export default PostComponent;
