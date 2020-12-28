<template>
  <div class="cart-list">
    <div
      v-for="cartProduct in cartProducts"
      :key="cartProduct.key"
      class="cart-list-item"
    >
      <img
        class="cart-list-item__image"
        :src="`https://frontend-test.idaproject.com${cartProduct.product.photo}?width=60`"
        alt="фотография"
      />
      <div class="cart-list-item__info">
        <h2 class="cart-list-item__title">
          {{ cartProduct.product.name }}
        </h2>
        <span class="cart-list-item__price"
          >{{ cartProduct.product.price }} ₽</span
        >
        <rating :rating="cartProduct.product.rating"></rating>
      </div>
      <svg
        class="cart-list-item__action"
        @click="remove(cartProduct.key)"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 10C6 9.44772 6.44772 9 7 9H25C25.5523 9 26 9.44772 26 10C26 10.5523 25.5523 11 25 11H7C6.44772 11 6 10.5523 6 10Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 7C13.7348 7 13.4804 7.10536 13.2929 7.29289C13.1054 7.48043 13 7.73478 13 8V9H19V8C19 7.73478 18.8946 7.48043 18.7071 7.29289C18.5196 7.10536 18.2652 7 18 7H14ZM21 9V8C21 7.20435 20.6839 6.44129 20.1213 5.87868C19.5587 5.31607 18.7956 5 18 5H14C13.2044 5 12.4413 5.31607 11.8787 5.87868C11.3161 6.44129 11 7.20435 11 8V9H9C8.44772 9 8 9.44772 8 10V24C8 24.7957 8.31607 25.5587 8.87868 26.1213C9.44129 26.6839 10.2043 27 11 27H21C21.7957 27 22.5587 26.6839 23.1213 26.1213C23.6839 25.5587 24 24.7957 24 24V10C24 9.44772 23.5523 9 23 9H21ZM10 11V24C10 24.2652 10.1054 24.5196 10.2929 24.7071C10.4804 24.8946 10.7348 25 11 25H21C21.2652 25 21.5196 24.8946 21.7071 24.7071C21.8946 24.5196 22 24.2652 22 24V11H10Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 14C14.5523 14 15 14.4477 15 15V21C15 21.5523 14.5523 22 14 22C13.4477 22 13 21.5523 13 21V15C13 14.4477 13.4477 14 14 14Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 14C18.5523 14 19 14.4477 19 15V21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21V15C17 14.4477 17.4477 14 18 14Z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Rating from '../UI/Rating'

export default {
  name: 'CartProductsList',
  components: { Rating },
  computed: {
    ...mapGetters({
      cartProducts: 'cart/productsList',
    }),
  },
  methods: {
    remove(productKey) {
      this.$store.commit('cart/removeProduct', { productKey })
    },
  },
}
</script>

<style scoped lang="sass">
.cart-list
  width: 100%
  display: grid
  grid-gap: 12px

  &-item
    display: grid
    grid-auto-flow: column
    grid-template-columns: max-content
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05)
    border-radius: 8px
    padding: 1rem

    &__info
      display: flex
      flex-direction: column
      font-size: 14px
      line-height: 18px

    &__title
      color: gray
      margin-bottom: 6px

    &__price
      font-weight: bold
      margin-bottom: 16px

    &__image
      height: 90px
      object-fit: cover
      width: auto
      align-self: center
      justify-self: center

    &__qty
      &-block
        display: flex
        align-items: center

    &__action
      cursor: pointer
      align-self: center
      justify-self: end
      fill: $gray-light
      width: 32px
      height: 32px

      &:hover
        fill: $dark
</style>
