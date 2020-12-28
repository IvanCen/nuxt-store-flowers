<template>
  <div>
    <div
      :class="['cart__overlay', { cart__overlay_open: cartIsOpen }]"
      @click="toggleCart"
    ></div>
    <div :class="['cart-container', { 'cart-container_open': cartIsOpen }]">
      <div class="cart">
        <!--<cart-message v-show="status === statuses.success" />-->
        <div class="cart__content-container">
          <header class="cart__header">
            <h1 class="cart__title">Корзина</h1>
          </header>
          <div v-if="cartProducts.length !== 0" class="cart__content">
            <h2 class="cart__subtitle">Товары в корзине</h2>
            <cart-products-list class="cart__list" />
            <div class="cart__total">
              <h2 class="cart__subtitle">К оплате</h2>
              <span>{{ cartTotalPrice }} ₽</span>
            </div>
            <h2 class="cart__subtitle">Оформить заказ</h2>
            <!--<cart-form :set-status="setStatus" :statuses="statuses" />-->
          </div>
          <div v-else class="cart__no-products">
            <h2 class="cart__text">
              Пока что вы ничего не добавили в корзину.
            </h2>
            <Button
              :class-names="['button_theme_primary', 'button_size_large']"
              :click="toggleCart"
            >
              Перейти к выбору
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Button from '../UI/Button'
import CartProductsList from '~/components/cart/CartProductsList'

export default {
  components: { CartProductsList, Button },
  computed: {
    ...mapGetters({
      cartProducts: 'cart/productsList',
      cartTotalPrice: 'cart/totalPrice',
      cartIsOpen: 'cart/isOpen',
    }),
  },
  methods: {
    setStatus(status) {
      this.status = status
    },
    toggleCart() {
      this.$store.dispatch('cart/toggle')
    },
  },
}
</script>

<style lang="sass">

$widthcontainer: 460px

@mixin fontTitle
  font-size: 18px
  line-height: 23px

.cart
  display: flex
  height: 100%
  padding: 48px

  &__title
    font-size: 32px
    line-height: 41px
    font-weight: bold

  &__subtitle
    +fontTitle

    margin-bottom: 16px
    color: $gray

  &__text
    font-size: 22px
    line-height: 28px
    margin-bottom: 24px

  &__total
    +fontTitle

    margin-bottom: 32px

  &__list
    margin-bottom: 1rem

  &__close
    cursor: pointer

  &__header
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 24px

  &-container
    position: fixed
    right: -$widthcontainer
    width: $widthcontainer
    height: 100%
    bottom: 0
    z-index: 1
    background-color: #fff
    flex-grow: 1
    transition: all .2s ease-out
    display: flex
    flex-direction: column
    align-items: stretch
    box-shadow: -4px 0 16px rgba(0, 0, 0, 0.05)
    border-radius: 8px 0 0 8px

    &_open
      right: 0
      top: 0
      height: 100%

  &__content-container
    width: 100%

  &__overlay
    position: fixed
    z-index: 1
    left: 0
    pointer-events: none
    width: 80%
    height: 100%
    bottom: 0
    top: 64px
    display: none
    background-color: rgba(0, 0, 0, 0)
    transition: all .2s ease-out

    &_open
      display: block
      pointer-events: unset
      background-color: rgba(0, 0, 0, .4)
      left: 0
      top: 0
      width: 100%
      height: 100%

      &.body
        overflow: hidden
</style>
