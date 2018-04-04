import request from '@/utils/request';

export function login(username, passwd) {
  const data = {
    username,
    passwd
  };

  return request({
    url: 'login/login',
    method: 'post',
    data,
  });
}