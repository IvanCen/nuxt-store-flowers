<template>
  <v-navigation-drawer v-model="navIsOpen" left fixed>
    <v-list nav dense>
      <v-list-item-group
        v-model="model"
        active-class="pink lighten-4 white--text text--accent-4"
      >
        <NuxtLink v-for="link in links" :key="link.title" :to="link.to">
          <v-list-item :class="{ 'active-class': link.isActive }" link>
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ link.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Nav',
  data() {
    return {
      model: 0,
    }
  },
  computed: {
    ...mapGetters({
      isOpen: 'nav/isOpen',
      links: 'links/links',
    }),
    navIsOpen: {
      get() {
        return this.isOpen
      },
      set(setIsOpen) {
        this.$store.commit('nav/changeIsOpen', setIsOpen)
      },
    },
  },
}
</script>
