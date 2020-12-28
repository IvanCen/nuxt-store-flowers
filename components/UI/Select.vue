<template>
  <div class="select">
    <span class="select__title">Сортировать по:</span>
    <label @click="toggleSelect" class="select__choose-name">{{
      getFilteredNameSelect
    }}</label>
    <div :class="['select__choose', { select__choose_open: isOpen }]">
      <label class="select__label" for="select-price"
        >По цене
        <input
          v-model="filterName"
          @click="toggleSelect"
          class="select__input"
          name="select"
          type="radio"
          id="select-price"
          value="price"
          ref="price"
          text="По цене"
        />
      </label>
      <label class="select__label" for="select-rating"
        >По популярности
        <input
          v-model="filterName"
          @click="toggleSelect"
          class="select__input"
          name="select"
          type="radio"
          id="select-rating"
          value="rating"
          ref="rating"
          text="По популярности"
        />
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Select',
  data() {
    return {
      filterName: '',
      isOpen: false,
    }
  },
  computed: {
    getFilteredNameSelect() {
      if (this.filterName) {
        this.filterProducts(this.filterName)
        return this.$refs[this.filterName].getAttribute('text')
      }
      return 'выбрать'
    },
  },
  methods: {
    toggleSelect() {
      this.isOpen = !this.isOpen
    },
    filterProducts(filteredName) {
      this.$store.dispatch('products/filteredProducts', { filteredName })
    },
  },
}
</script>

<style scoped lang="sass">
@mixin font
  font-size: 16px
  line-height: 21px

.select
  position: relative
  display: flex
  justify-content: center
  align-items: center

  &__title
    +font

  &__choose
    width: 100%
    position: absolute
    bottom: -100%
    right: 0
    display: flex
    flex-direction: column
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05)
    border-radius: 8px
    padding: 8px 0
    z-index: 1
    background-color: $light
    transition: all 0.2s
    opacity: 0
    visibility: hidden

    &_open
      opacity: 1
      visibility: visible


  &__choose-name
    color: $gray
    +font

    &::after
      content: ''
      background-image: url("assets/icons/arrow-bottom.svg")
      width: 5px
      height: 3px
      position: absolute
      top: 50%
      right: -8px

  &__input
    display: none

  &__label
    font-size: 14px
    line-height: 18px
    cursor: pointer
    padding: 4px 0 4px 12px
    color: $gray-light

    &:hover
      background: $grey-extra-light
      color: $dark
</style>
