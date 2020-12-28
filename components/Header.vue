<template>
  <div>
    <v-app-bar
      app
      color="pink lighten-4"
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
    >
      <v-btn icon color="white" @click.stop="toggleNav">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(255,228,225,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <NuxtLink to="/">
        <img
          class="logo"
          src="icons/logo.png"
          alt="logo"
          v-text="'Букет цветов'"
        />
      </NuxtLink>
      <v-spacer />
      <div class="header__info mr-10">
        <a href="tel:+78129221742" class="header__phone">+7 (812) 922-17-42</a>
        <span class="header__schedule">Работаем для вас 24/7</span>
      </div>
      <NuxtLink to="/basket">
        <button class="navbar__cart">
          <v-icon color="white">mdi-basket</v-icon>
          <!--<span v-if="qty > 0" class="navbar__cart-count">
          {{ qty }}
        </span>-->
        </button>
      </NuxtLink>
    </v-app-bar>
    <Nav />
  </div>
</template>

<script>
import Nav from './Nav'

export default {
  name: 'Header',
  components: {
    Nav,
  },
  methods: {
    toggleCart() {
      console.log('click')
      this.$store.dispatch('cart/toggle')
    },
    toggleNav() {
      console.log('click')
      this.$store.dispatch('nav/toggle')
    },
  },
}
</script>
<style lang="scss">
.header {
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 640px) {
      display: none;
    }
  }

  &__schedule {
    font-size: 14px;
    color: $white;
  }

  &__phone {
    color: $black;
    :hover {
      color: rgba(0, 0, 0, 0.7) !important;
    }
  }

  &__logo {
    height: 100%;
  }
}
.logo {
  height: 70px;
}
</style>
