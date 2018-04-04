const pages = {
  state: {
    currentPage: 0,
  },
  mutations: {
    SET_CPAGE: (state, token) => {
      state.currentPage = token;
    }
  },
  actions: {
    ChangeCurrentPage({commit}, cur) {
      commit('SET_CPAGE', cur);
    },
  }
};