import React from 'react';


function ThunkMiddlewareSample({ post, users, loadingPost, loadingUsers }) {

  return (
    <div>
      <h3>post</h3>
      {loadingPost && <div>post loading...</div>}
      <div>title: {post && post.title}</div>
      <div>body: {post && post.body}</div>
      <hr/>
      <h3>users</h3>
      {loadingUsers && <div>users loading...</div>}
      {users && users.map(user => {
        return (
          <ul key={user.id}>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </ul>
        )
      })}
    </div>
  );
}

export default ThunkMiddlewareSample;
