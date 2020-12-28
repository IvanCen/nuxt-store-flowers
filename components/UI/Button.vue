<template>
  <button
    :disabled="disabled"
    :class="['button', ...classNames, { button_disabled: disabled }]"
    :type="type"
    @click.prevent="click"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    classNames: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'submit',
    },
    click: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<style scoped lang="sass">

.button
  font-size: 16px
  line-height: 21px
  padding: 14px 20px
  text-decoration: none
  transition: $duration
  border: none
  cursor: pointer
  border-radius: $border-radius

  &:hover
    opacity: 0.7

  &_disabled
    background-color: $grey-extra-light !important
    cursor: default

  &_size_large
    width: 100%

  &_theme_primary
    color: #fff
    background: #000
</style>
