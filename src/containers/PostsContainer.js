import React, {useEffect} from 'react';
import Posts from 'components/Posts';
import {connect} from 'react-redux';
import {getPostById, getUsers} from 'modules/posts';
import {GET_POST_BY, GET_USERS} from 'modules/posts';


function PostsContainer({
                          post, users,
                          errorPost, errorUsers,
                          loadingPost, loadingUsers,
                          getPostById, getUsers
                        }) {

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
      errorPost={errorPost}
      errorUsers={errorUsers}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
}

export default connect(
  ({posts, loading, error}) => ({
    post: posts.post.data,
    loadingPost: loading[GET_POST_BY],
    users: posts.users.data,
    loadingUsers: loading[GET_USERS],
    errorPost: error[GET_POST_BY],
    errorUsers: error[GET_USERS],
  }), {
    getPostById,
    getUsers,
  }
)(PostsContainer);
