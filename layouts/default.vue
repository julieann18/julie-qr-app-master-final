<template>
  <v-app dark>
    <!-- Left Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list dense>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>{{ miniVariant ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon>
      </v-btn>

      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>

      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer />

      <v-btn @click="$auth?.logout?.()">Logout</v-btn>

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <!-- Right Navigation Drawer -->
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
      app
    >
      <v-list>
        <v-list-item @click="right = !right">
          <v-list-item-icon>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Switch drawer (click me)</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Footer -->
    <v-footer :fixed="fixed" app>
      <v-col class="text-center" cols="12">
        <span>&copy; {{ currentYear }}</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Vuetify.js App',
      items: [
        { icon: 'mdi-apps', title: 'Welcome', to: '/' },
        { icon: 'mdi-chart-bubble', title: 'Inspire', to: '/inspire' },
        { icon: 'mdi-login', title: 'Sign In', to: '/signin' },
        { icon: 'mdi-qrcode-scan', title: 'Scan', to: '/scan' }
      ]
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.v-application {
  font-family: 'Roboto', sans-serif;
}
</style>
