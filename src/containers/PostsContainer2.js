import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Posts from "components/Posts";
import { getPostBy, getUsers, GET_POST_BY, GET_USERS } from 'modules/posts2';
import {bindActionCreators} from "redux";


function PostsContainer2({ post, users, loadingPost, loadingUsers, getPostBy, getUsers}) {

  useEffect(() => {
    const request = async () => {
      await getPostBy(2);
      await getUsers();
    }
    request();

  }, [getPostBy, getUsers]);

  return (
    <Posts
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
      exceptionPost={null}
      exceptionUsers={null}
    />
  );
}

export default connect(
  ({ posts2, loading }) => ({
    post: posts2.post,
    users: posts2.users,
    loadingPost: loading[GET_POST_BY],
    loadingUsers: loading[GET_USERS],
  }),
  dispatch => bindActionCreators({
    getPostBy,
    getUsers,
  }, dispatch)
)(PostsContainer2);
