import Mock from 'mockjs';
import loginAPI from './login';
import menuAPI from './menu';
import catMenuApi from './catMenu';
import catAPI from './category';
import contApi from './content';

Mock.mock(/\/login\/login/, 'post', loginAPI.login);
Mock.mock(/\/admin\/menu/, 'get', menuAPI);
Mock.mock(/\/admin\/catmenu/, 'get', catMenuApi);
Mock.mock(/\/admin\/index\/main/, 'get', [
  {
    'desc': /[\w\d]{20}/,
    'info': /^[\w\d]{45}$/,
  },
  {
    'desc': /[\w\d]{20}/,
    'info': /^[\w\d]{45}$/,
  },
  {
    'desc': /[\w\d]{20}/,
    'info': /^[\w\d]{45}$/,
  },
  {
    'desc': /[\w\d]{20}/,
    'info': /^[\w\d]{45}$/,
  }
]);
Mock.mock(/\/admin\/category\/index/, 'get', catAPI);
Mock.mock(/\/admin\/content\/index/, 'get', contApi);
