<template>
  <v-card
    height="490px"
    contain
    :loading="loading"
    class="mx-auto my-12"
    max-width="285"
  >
    <template slot="progress">
      <v-progress-linear
        color="pink"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="150" :src="card.image"></v-img>

    <v-card-title>{{ card.name }}</v-card-title>
    <v-card-subtitle>{{ card.price }}</v-card-subtitle>

    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      {{ card.description }}
    </v-card-text>
    <v-spacer />
    <v-card-actions class="btn">
      <v-btn color="pink lighten-2" text @click="reserve"> В корзину </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style scoped lang="scss">
.btn {
  position: absolute;
  bottom: 8px;
  left: 8px;
}
</style>
