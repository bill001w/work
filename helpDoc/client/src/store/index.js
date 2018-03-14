import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 在非生产环境下，使用严格模式
  state: {
    // 目录层级
    directory: [],
    articlename: ''
  },
  mutations: {
    SET_DICTIONARY: (state, directory) => {
      state.directory = directory
    },
    SET_ARTICLENAME: (state, articlename) => {
      state.articlename = articlename
    }
  }
})