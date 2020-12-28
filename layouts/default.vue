<template>
  <v-app>
    <Header />
    <v-main class="overflow-y-hidden">
      <v-container class="px-10 py-15">
        <nuxt />
      </v-container>
      <Footer />
    </v-main>
    <Cart />
  </v-app>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cart from '../components/cart/Cart'

export default {
  components: {
    Footer,
    Header,
    Cart,
  },
}
</script>
