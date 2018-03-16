import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import {PRODUCT_LIST, ACCOUNT_LIST, TEMPLATE_MGMT, USER_LOGIN, CHANGE_PASS} from '../constant'

Vue.use(Router)

const PageLayout = () => import('@/components/layout')
const ProductList = () => import('@/components/pages/ProductList')
const AccountList = () => import('@/components/pages/AccountList')
const TemplateMgmt = () => import('@/components/pages/TemplateMgmt')
const UserLogin = () => import('@/components/pages/LoginPage/UserLogin.vue')
const ChangePass = () => import('@/components/pages/LoginPage/ChangePass.vue')

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: USER_LOGIN,
      component: UserLogin,
    }, 
    {
      path: '/changepass',
      name: CHANGE_PASS,
      component: ChangePass
    },
    {
      path: '/admin',
      component: PageLayout,
      redirect: '/admin/product',
      children: [
        {
          path: 'product',
          name: PRODUCT_LIST,
          component: ProductList,
        }, {
          path: 'account',
          name: ACCOUNT_LIST,
          component: AccountList,
        }, {
          path: 'template',
          name: TEMPLATE_MGMT,
          component: TemplateMgmt,
        }
      ]
    }
  ]
})

router.afterEach((to, from) => {
  store.commit('SET_ACTIVE_PAGE',to.name)
})

export default router