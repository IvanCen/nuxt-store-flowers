export const state = () => ({
  products: null,
})

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
}

export const actions = {
  async fetchProducts({ commit }, { filter }) {
    commit('setProducts', await new Promise((resolve) => resolve([])))
  },
  filteredProducts({ state, commit }, { filteredName }) {
    const filtered = [...state.products]
      .sort((a, b) => {
        return a[filteredName] - b[filteredName]
      })
      .reverse()
    commit('setProducts', filtered)
  },
}

export const getters = {
  allProducts: (state) => state.products,
}
