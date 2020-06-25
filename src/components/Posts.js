import React from 'react';

function Posts({post, users, loadingPost, loadingUsers}) {
  return (
    <div>
      <h2>Posts</h2>
      <div>
        {loadingPost && <h4>Loading...</h4>}
        <div>title: {post && post.title}</div>
        <div>body: {post && post.body}</div>
      </div>
      <hr/>
      <h2>users</h2>
      {loadingUsers && <h4>Loading...</h4>}
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
