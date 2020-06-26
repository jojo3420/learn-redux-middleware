import React, { useEffect  } from 'react';
import ThunkMiddlewareSample from "components/ThunkMiddlewareSample";
import { connect } from 'react-redux';
import { getPost, getUsers, GET_POST, GET_USERS } from 'modules/sagaMiddlewareSample';


function SagaMiddlewareSampleContainer({ post, users, loadingPost, loadingUsers, getPost, getUsers }) {

  useEffect(() => {
    const request = async () => {
      await getPost(20);
      await getUsers();
    }
    request();
  }, [getUsers, getPost]);

  return (
    <ThunkMiddlewareSample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
}

export default connect(
  ({ sagaMiddlewareSample, loading }) => ({
    post: sagaMiddlewareSample.post,
    users: sagaMiddlewareSample.users,
    loadingPost: loading[GET_POST],
    loadingUsers: loading[GET_USERS],
  }),
  { getPost, getUsers }
)(SagaMiddlewareSampleContainer);
