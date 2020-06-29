import React, { useEffect } from 'react';
import Posts from 'components/Posts';
import {getPost, getUsers, GET_POST, GET_USERS} from 'modules/posts';
import {connect} from 'react-redux';

function PostsContainer({post, users, loadingPost, loadingUsers, exceptionPost, exceptionUsers, getPost, getUsers}) {


  useEffect(() => {
    const request = async () => {
      console.log('call')
      await getPost();
      await getUsers();
    }
    request();
  }, [getPost, getUsers]);

  return (
    <Posts
      post={post}
      users={users}
      loadingPost={loadingPost}
      loading={loadingUsers}
      exceptionPost={exceptionPost}
      exceptionUsers={exceptionUsers}
    />
  );
}

export default connect(
  ({posts, loading, exception}) => {
    return {
      post: posts.post,
      users: posts.users,
      loadingPost: loading[GET_POST],
      loadingUsers: loading[GET_USERS],
      exceptionPost: exception[GET_POST],
      exceptionUsers: exception[GET_USERS],
    }
  },
  {getPost, getUsers}
)(PostsContainer);
