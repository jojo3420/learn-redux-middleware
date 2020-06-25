import React, { useEffect } from 'react';
import Posts from 'components/Posts';
import { connect } from 'react-redux';
import {getPostById, getUsers } from 'modules/posts';


function PostsContainer({ post, users, loadingPost, loadingUsers, getPostById, getUsers }) {

  useEffect(() => {
    const fetch = async () => {
      await getPostById(2);
      await getUsers();
    };
    fetch();
  }, [getPostById, getUsers])

  return (
    <Posts
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
}

export default connect(
  ({ posts }) => ({
    post: posts.post.data,
    loadingPost: posts.post.loading,
    users: posts.users.data,
    loadingUsers: posts.users.loading,
  }), {
    getPostById,
    getUsers,
  }
)(PostsContainer);
