<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <!-- Logo Card -->
        <v-card class="logo py-4 d-flex justify-center">
          <!-- Commented out for testing -->
          <!-- <NuxtLogo />
          <VuetifyLogo /> -->
          <v-icon large>mdi-nuxt</v-icon>
          <v-icon large>mdi-vuetify</v-icon>
        </v-card>

        <!-- Main Welcome Card -->
        <v-card class="mt-4">
          <v-card-title class="headline">
            Welcome to the Vuetify + Nuxt.js template
          </v-card-title>

          <v-card-text>
            <p>
              Vuetify is a progressive Material Design component framework for Vue.js.
            </p>
            <p>
              <a href="https://vuetifyjs.com" target="_blank">Vuetify Docs</a>
            </p>
            <p>
              <a href="https://nuxtjs.org/" target="_blank">Nuxt Docs</a>
            </p>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/inspire">Continue</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.logo {
  gap: 16px;
}
</style>
