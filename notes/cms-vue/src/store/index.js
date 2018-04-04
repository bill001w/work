import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import menuTabs from './modules/menuTabs';
import pages from './modules/pages';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    menuTabs,
    pages,
  },
  getters
});

export default store;