import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login';
import Index from '@/components/index';
import Home from '@/components/home';
import Config from '@/components/config';
import Category from '@/components/category';
import Content from '@/components/content';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/admin/index/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin/index/config',
      name: 'Config',
      component: Config
    },
    {
      path: '/admin/category/index',
      name: 'Category',
      component: Category,
    },
    {
      path: '/admin/content/index',
      name: 'Content',
      component: Content,
    },
  ]
})
