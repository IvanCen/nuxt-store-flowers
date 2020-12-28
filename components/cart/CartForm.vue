<template>
  <form class="form" @submit.prevent="onSubmit">
    <div class="form__field" :class="{ form__field_invalid: isNameInvalid }">
      <input
        @input="isButtonDisabled"
        placeholder="Ваше имя"
        v-model="name"
        type="text"
        class="form__input"
      />
    </div>
    <div class="form__field" :class="{ form__field_invalid: isPhoneInvalid }">
      <masked-input
        @input="isButtonDisabled"
        placeholder="Телефон"
        type="tel"
        class="form__input"
        v-model="phone"
        mask="\+\7 (111) 111-1111"
      />
    </div>
    <div class="form__field" :class="{ form__field_invalid: isAddressInvalid }">
      <input
        @input="isButtonDisabled"
        placeholder="Адрес"
        v-model="address"
        type="text"
        class="form__input"
      />
    </div>
    <Button
      :disabled="buttonDisabled"
      :type="'submit'"
      :classNames="['button_theme_primary', 'button_size_large']"
    >
      Отправить
    </Button>
  </form>
</template>

<script>
import MaskedInput from 'vue-masked-input'
import Button from '../UI/Button'

export default {
  name: 'CartForm',
  components: {
    Button,
    MaskedInput,
  },
  props: {
    statuses: {
      type: Object,
      required: true,
    },
    // eslint-disable-next-line vue/require-default-prop
    setStatus: {
      type: Function,
    },
  },
  data() {
    return {
      name: '',
      phone: '',
      address: '',
      isNameInvalid: false,
      isPhoneInvalid: false,
      isAddressInvalid: false,
      buttonDisabled: true,
    }
  },
  computed: {},
  methods: {
    isValid() {
      let valid = true
      if (this.name.length < 2) {
        this.isNameInvalid = true
        valid = false
      } else {
        this.isNameInvalid = false
      }
      if (this.phone.length !== 17) {
        this.isPhoneInvalid = true
        valid = false
      } else {
        this.isPhoneInvalid = false
      }
      if (!/\s/.test(this.address)) {
        this.isAddressInvalid = true
        valid = false
      } else {
        this.isAddressInvalid = false
      }
      return valid
    },
    isButtonDisabled() {
      this.buttonDisabled = !(this.name && this.phone && this.address)
    },
    clearInputsField() {
      this.name = ''
      this.phone = ''
      this.address = ''
    },
    onSubmit() {
      if (this.isValid()) {
        this.setStatus(this.statuses.creating)
        const success = this.$store.dispatch('cart/submit')
        this.setStatus(success && this.statuses.success)
        setTimeout(() => {
          this.clearInputsField()
          this.setStatus(this.statuses.init)
        }, 2000)
      }
    },
  },
}
</script>

<style scoped lang="sass">
.form
  &__field
    background: #F8F8F8
    border-radius: 8px
    margin-bottom: 16px

    &_invalid
      border: 1px solid red

    &:last-child
      margin-bottom: 24px

  &__input
    border: none
    background: inherit
    padding: 15px
    border-radius: 8px
    width: 100%

    &::placeholder
      color: $gray-light
      font-size: 16px
      line-height: 21px
</style>
