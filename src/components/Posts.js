import React from 'react';

function Posts({post, users, loadingPost, loadingUsers, errorPost, errorUsers}) {
  return (
    <div>
      <h2>Posts</h2>
      <div>
        {loadingPost && <h4>Loading...</h4>}
        {!loadingPost && errorPost && <h4>{errorPost.toString()}</h4>}
        {post && (
          <>
          <div>title: {post.title}</div>
          <div>body: {post.body}</div>
          </>
        )}
      </div>
      <hr/>
      <h2>users</h2>
      {loadingUsers && <h4>Loading...</h4>}
      {!loadingUsers && errorUsers && <h4>{errorUsers.toString()}</h4>}
      {users && users.map(user => {
        return (
          <div key={user.id}>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>email: {user.email}</div>
          </div>
        )
      })}
      <hr/>
    </div>
  );
}

export default Posts;
