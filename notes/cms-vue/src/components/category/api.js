import request from '@/utils/request';

export default function geCategory() {
  return request({
    url: '/admin/category/index',
    method: 'get',
  });
}