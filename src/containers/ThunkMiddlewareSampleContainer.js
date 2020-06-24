import React, { useEffect } from 'react';
import ThunkMiddlewareSample from "components/ThunkMiddlewareSample";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import { getPost, getUsers } from 'modules/thunkMiddlewareSample';

function ThunkMiddlewareSampleContainer( { post, users, loadingPost, loadingUsers, getPost, getUsers }) {

  useEffect(() => {
    const fetch = async () => {
      await getPost(1);
      await getUsers();
    };
    fetch();
  // }, []);
  }, [getPost, getUsers]);

  return (
    <div>
      <ThunkMiddlewareSample
        post={post}
        users={users}
        loadingPost={loadingPost}
        loadingUsers={loadingUsers}
      />
    </div>
  );
}

export default connect(
  ({ thunkMiddlewareSample, loading }) => ({
    post: thunkMiddlewareSample.post.data,
    users: thunkMiddlewareSample.users.data,
    loadingPost: loading['thunkMiddlewareSample/GET_POST'],
    loadingUsers: loading['thunkMiddlewareSample/GET_USERS'],
  }),
  dispatch => bindActionCreators({
    getPost,
    getUsers,
  }, dispatch)
)(ThunkMiddlewareSampleContainer);
