<template>
  <v-footer color="pink lighten-4" padless>
    <v-row justify="center" no-gutters>
      <NuxtLink v-for="link in links" :key="link.title" :to="link.to">
        <v-btn color="white" text class="my-2">
          {{ link.title }}
        </v-btn>
      </NuxtLink>
      <v-col class="pink lighten-4 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Footer',

  computed: {
    ...mapGetters({
      links: 'links/links',
    }),
  },
}
</script>
