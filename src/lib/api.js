import axios from 'axios';

/*
# 포스트 읽기(:id는 1~100 사이 숫자)
GET https://jsonplaceholder.typicode.com/posts/:id

# 모든 사용자 정보 불러오기
GET https://jsonplaceholder.typicode.com/users
 */

export const getPost = id =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = () =>
  axios.get('https://jsonplaceholder.typicode.com/users');
