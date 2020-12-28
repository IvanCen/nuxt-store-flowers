import Vue from 'vue'

export const state = () => ({
  products: {},
  isOpen: false,
})

export const getters = {
  productsList: (state) => {
    return Object.values(state.products)
  },
  productsQty: (state) => {
    let qty = 0
    for (const product of Object.values(state.products)) {
      qty += product.qty
    }
    return qty
  },
  totalPrice: (state) => {
    let price = 0
    for (const product of Object.values(state.products)) {
      price += product.product.price
    }
    return price
  },
  isOpen: (state) => {
    return state.isOpen
  },
}

export const mutations = {
  addProduct(state, { product }) {
    const key = product.id
    Vue.set(state.products, key, {
      key,
      product,
      qty: 1,
    })
  },
  removeProduct(state, { productKey }) {
    Vue.delete(state.products, productKey)
  },
  clear(state) {
    state.products = {}
  },
  setIsOpen(state) {
    state.isOpen = !state.isOpen
  },
}

export const actions = {
  submit({ commit }) {
    commit('clear')
    return true
  },
  toggle({ commit }) {
    commit('setIsOpen')
    return true
  },
}
