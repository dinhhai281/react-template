import { fromPost, useAppDispatch } from '@app/store';
import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

const PostComponent: FC = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector(fromPost.selectAllPosts);

  useEffect(() => {
    dispatch(fromPost.doFetchAllPost());
  }, []);
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default PostComponent;
