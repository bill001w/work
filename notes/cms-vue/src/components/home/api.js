import request from '@/utils/request';

export default function getMainInfo() {
  return request({
    url: '/admin/index/main',
    method: 'get',
  });
}