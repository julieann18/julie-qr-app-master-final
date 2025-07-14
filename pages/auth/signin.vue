<template>
  <div class="d-flex align-center justify-center fill-height bg-grey-lighten-4">
    <v-card
      width="420"
      elevation="12"
      class="pa-6 rounded-xl animate__animated animate__fadeIn"
    >
      <!-- Logo Section -->
      <div class="d-flex justify-center mb-4">
        <v-avatar size="64">
          <v-img src="/logo.png" alt="App Logo"></v-img>
        </v-avatar>
      </div>

      <!-- Title -->
      <h2 class="text-center font-weight-bold mb-6">Welcome Back</h2>

      <!-- Login Form -->
      <v-form @submit.prevent="handleLogin">
        <v-text-field
          v-model="username"
          outlined
          label="Username"
          type="text"
          prepend-inner-icon="mdi-account"
          class="mb-4"
        ></v-text-field>

        <v-text-field
          v-model="password"
          outlined
          label="Password"
          type="password"
          prepend-inner-icon="mdi-lock"
          class="mb-2"
        ></v-text-field>

        <div class="text-right mb-4">
          <a
            href="#"
            class="text-subtitle-2 text-decoration-none blue--text text--darken-2"
          >
            Forgot Password?
          </a>
        </div>

        <v-btn
          color="primary"
          block
          large
          rounded
          type="submit"
          class="mb-4"
        >
          Login
        </v-btn>
      </v-form>

      <!-- Divider -->
      <div class="d-flex align-center my-3">
        <v-divider class="flex-grow-1"></v-divider>
        <span class="mx-3 text-caption text-grey">OR</span>
        <v-divider class="flex-grow-1"></v-divider>
      </div>

      <!-- Google Sign-In Button -->
      <v-btn
        block
        class="google-btn text-white font-weight-medium"
        elevation="2"
        @click="signinWithGoogle"
      >
        <v-icon left color="white">mdi-google</v-icon>
        Sign in with Google
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  layout: "auth",
  middleware: "guest",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    signinWithGoogle() {
      this.$auth.loginWith("google");
    },
    handleLogin() {
      console.log("Logging in:", this.username, this.password);
      // Insert your actual login logic here
      this.$auth.loginWith("local", {
        data: {
          username: this.username,
          password: this.password,
        },
      }).then(() => {
        this.$router.push('/');
      }).catch(err => {
        console.error("Login failed", err);
      });
    },
  },
};
</script>

<style scoped>
.google-btn {
  background-color: #DB4437;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.google-btn:hover {
  background-color: #c33d2e;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
