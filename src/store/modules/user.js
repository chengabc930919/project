import { ailogin, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import Cookies from 'js-cookie'
import Vue from 'vue'
const state = {
  token: getToken(),
  name: '',
  menu: [],
  submenu: [],
  topmenu: '',
  avatar: '',
  introduction: '',
  title: '',
  actionname: ''
}

const mutations = {
  SET_SUBMENU: (state, submenu) => {
    state.submenu = submenu
  },
  SET_TOPMENU: (state, topmenu) => {
    state.topmenu = topmenu
  },
  SET_TITLE: (state, title) => {
    state.title = title
  },
  SET_MENU: (state, menu) => {
    state.menu = menu
  },
  SET_ACTIONNAME: (state, actionname) => {
    // Vue.set(state, actionname, actionname)
    Vue.set(state, 'actionname', actionname)
    // state.actionname = actionname
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  setsubmenu({ commit }, submenu) {
    return new Promise((resolve, reject) => {
      commit('SET_SUBMENU', submenu)
    })
  },
  settopmenu({ commit }, topmenu) {
    return new Promise((resolve, reject) => {
      commit('SET_TOPMENU', topmenu)
    })
  },
  setmenu({ commit }, menu) {
    return new Promise((resolve, reject) => {
      commit('SET_MENU', menu)
    })
  },
  settitle({ commit }, title) {
    return new Promise((resolve, reject) => {
      commit('SET_TITLE', title)
    })
  },
  setactionname({ commit }, actionname) {
    return new Promise((resolve, reject) => {
      commit('SET_ACTIONNAME', actionname)
    })
  },
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      ailogin({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { name, avatar, introduction } = data

        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_NAME', '')
        removeToken()
        document.body.className = ''
        Cookies.remove('size')
        Cookies.remove('themeValue')
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
