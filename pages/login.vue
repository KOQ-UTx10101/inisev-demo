<template>
  <div class="login">
    <div class="login__bg-shape"></div>
    <div class="login__bg-shape"></div>

    <form class="login__form">
      <span class="login__form__title">Sign-In To Your Account</span>

      <label for="username">Username</label>
      <input id="username" v-model="username" type="text" />

      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" />

      <button @click.prevent="login">Log In</button>
    </form>

    <span v-if="errorMsg" class="login__alert" @click="() => (errorMsg = '')">
      {{ errorMsg }}
    </span>
  </div>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LoginPage",
  middleware({ store, redirect }) {
    if (store.state.isLoggedIn) {
      return redirect("/");
    }
  },
  data() {
    return {
      username: "",
      password: "",
      errorMsg: "",
    };
  },
  head: {
    title: "Login - Inisev Demo",
  },
  methods: {
    showError(msg: string) {
      this.errorMsg = msg;
      setTimeout(() => {
        this.errorMsg = "";
      }, 5000);
    },
    login() {
      if (this.username !== "admin" || this.password !== "1234") {
        this.showError("incorrect username or password");
      } else {
        this.$store.commit("login");
        this.$router.push("/users");
      }
    },
  },
});
</script>

<style scoped>
.login {
  width: 320px;
  height: 520px;
  position: relative;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
}

.login__bg-shape {
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}

.login__bg-shape:nth-child(1) {
  background: linear-gradient(#1845ad, #23a2f6);
  left: -50px;
  top: -50px;
}

.login__bg-shape:nth-child(2) {
  background: linear-gradient(to right, #ff512f, #f09819);
  right: -50px;
  bottom: -50px;
}

.login__form {
  margin: 10px 10px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}

.login__form__title {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

.login__form label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}

.login__form input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}

.login__form button {
  margin-top: 25px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}

.login__alert {
  position: fixed;
  display: block;
  padding: 1em 1.8em;

  top: 20px;

  font-size: 0.9em;
  font-weight: 300;
  line-height: 1.2;
  text-align: left;

  background-color: red;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 2px solid red;
  box-shadow: 0 0 40px red;

  animation: shake 1s;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
