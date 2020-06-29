import React from 'react';

function Posts({ post, users, loadingPost, loadingUsers, exceptionPost, exceptionUsers }) {
  return (
    <div>
      <h2>Post</h2>
      {loadingPost && <div>Loading...</div>}
      {!loadingPost && exceptionPost && <div>{exceptionPost.stack}</div>}
      {post && (
        <>
          <div><span>id: </span> {post.id}</div>
          <div><span>title:</span> {post.title}</div>
          <div><span>body:</span> {post.body}</div>
        </>
      )}
      <hr/>
      <h2>users</h2>
      {loadingUsers && <div>loading..</div>}
      {!loadingUsers && exceptionUsers && <div>{exceptionUsers.toString()}</div>}
      {users && users.map(user => (
        <div key={user.id}>
          <div>id: {user.id}</div>
          <div>name: {user.name}</div>
          <div>email: {user.email}</div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
