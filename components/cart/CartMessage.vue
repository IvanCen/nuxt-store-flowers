<template>
  <div class="cart-message">
    <img
      class="cart-message__icon"
      src="assets/icons/ok.svg"
      alt="иконка 'ок'"
    />
    <h2 class="cart-message__title">Заявка успешно отправлена</h2>
    <p class="cart-message__text">Вскоре наш менеджер свяжется с Вами</p>
  </div>
</template>

<script>
export default {
  name: 'CartMessage',
}
</script>

<style scoped lang="sass">
.cart-message
  width: 100%
  padding: 3rem 0
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  flex-wrap: wrap

  &__icon
    margin-bottom: 24px
    width: 80px
    height: 80px

  &__title
    font-weight: bold
    font-size: 24px
    line-height: 31px

  &__text
    font-size: 16px
    line-height: 21px
    color: $gray
</style>
