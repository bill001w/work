import Vue from 'vue'
import Router from 'vue-router'
import MarkDown from '../views/markdown.vue'
import Editor from '../views/editor.vue'
import Videos from '../views/videos.vue'
import Search from '../views/search.vue'
import Login from '../views/login.vue'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/login',
      component: Login
    },
    {
      path: '/editor/:md',
      component: Editor,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/search/:kwd',
      component: Search
    },
    {
      path: '/videos',
      component: Videos
    },
    {
      path: '/:id/:href',
      component: MarkDown
    },
    {
      path: '/:id',
      component: MarkDown
    },
    {
      path: '/',
      redirect: '/ct_skill'
    }
  ]
})

router.beforeEach(function (to, from, next) {
  const dom = document.getElementById('markdownbody')
  if (dom) {
    dom.scrollTop = 0
  }

  // const toPath = to.path
  // const fromPath = from.path
  // const userId = window.uid || 0
  // track({
  //   userId,
  //   toPath: '/docs/#' + toPath,
  //   fromPath: '/docs/#' + fromPath
  // })

  if (to.matched.some(record => record.meta.requireAuth)) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router