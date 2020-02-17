
import axios from 'axios'

export const state = () => ({
  searchIndex: false
})

export const mutations = {
  setSearchIndex(state, data) {
    state.searchIndex = data
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req }) {

  },
  setSearchIndex(vuexContext, data) {
    vuexContext.commit('setSearchIndex', data)
  }
}

export const getters = {
  getSearchIndex(state) {
    return state.searchIndex
  }
}
