import request from '@/utils/request';

export function getMenu() {
  return request({
    url: 'admin/menu',
    method: 'get'
  });
}

export function getCatMenu() {
  return request({
    url: 'admin/catmenu',
    method: 'get'
  });
}