import Cookies from 'js-cookie';
import {login} from '@/components/login/api';
import {Message} from "element-ui";

const user = {
  state: {
    token: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },

  actions: {
    Login({commit}, userInfo) {
      const username = userInfo.username.trim();

      return new Promise((resolve, reject) => {
        login(username, userInfo.passwd)
            .then(response => {
              const data = response.data;

              if (data.code === 0) {
                Cookies.set('Admin-Token', data.token);
                commit('SET_TOKEN', data.token);
                resolve();
              } else {
                Message({
                  message: data.msg,
                  type: 'error',
                  duration: 5 * 1000
                });
                reject(data.msg);
              }
            })
            .catch(error => {
              reject(error);
            });
      })
    }
  }
};

export default user;