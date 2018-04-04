const menuTabs = {
  state: {
    currentTab: 0,
    tabInfo: []
  },

  mutations: {
    SET_tabInfo: (state, tabInfo) => {
      if (state.tabInfo.some((value) => {
            if (value.id === tabInfo.id){
              state.currentTab = tabInfo.id;

              return true;
            }
          })) {
        return;
      }

      state.tabInfo.push(tabInfo);
      state.currentTab = tabInfo.id;
    },
    SET_currentTab: (state, id) => {
      if (state.currentTab === id) return;
      state.currentTab = id;
    },
    DELETE_tabInfo: (state, id) => {
      state.tabInfo.forEach((value, index) => {
        if (value.id === id) {
          state.tabInfo.splice(index, 1);

          if (state.currentTab === id) {
            state.currentTab = state.tabInfo[index]
                ? state.tabInfo[index].id
                : state.tabInfo[index - 1]
                    ? state.tabInfo[index - 1].id : 0;
          }
        }
      });


    },
  },

  actions: {
    addTab({commit}, tabInfo) {
      commit('SET_tabInfo', tabInfo);
    },
    changeCurrentTab({commit}, id) {
      commit('SET_currentTab', id);
    },
    deleteTab({commit}, id) {
      commit('DELETE_tabInfo', id);
    },
  }
};

export default menuTabs;