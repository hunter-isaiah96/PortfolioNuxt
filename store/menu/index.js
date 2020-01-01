const state = () => ({
  drawer: false
})

const getters = {
  drawer: state => state.drawer
}

const actions = {
  toggleDrawer({ commit }, value) {
    commit('TOGGLE_DRAWER', value)
  }
}

const mutations = {
  TOGGLE_DRAWER(state, value) {
    state.drawer = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
