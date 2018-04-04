import request from '@/utils/request';

export default function getContent() {
  return request({
    url: '/admin/content/index',
    method: 'get',
  });
}