export const state = () => ({
  isOpen: false,
})

export const getters = {
  isOpen: (state) => {
    return state.isOpen
  },
}

export const mutations = {
  changeIsOpen(state, boolean) {
    state.isOpen = boolean || !state.isOpen
  },
}

export const actions = {
  toggle({ state, commit }) {
    commit('changeIsOpen')
    return true
  },
}
