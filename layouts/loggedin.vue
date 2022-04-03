<template>
  <Nuxt />
</template>

<script lang="ts">
import { Context } from "@nuxt/types";

export default {
  name: "LoggedInLayout",
  middleware({ store, redirect }: Context) {
    if (!store.state.isLoggedIn) {
      return redirect("/login");
    }
  },
};
</script>

<style>
*,
*:before,
*:after {
  padding: 0;
  margin: 0;

  box-sizing: border-box;
  outline: none;
  border: none;

  color: #ffffff;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.5px;
}

::selection {
  background-color: #47a3f3;
  color: #fefefe;
}

::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: #2d3748;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #cbd5e0;
}

::-webkit-scrollbar-thumb:hover {
  background: #718096;
}

pre::-webkit-scrollbar {
  display: none;
}

pre {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

html {
  scroll-behavior: smooth;
}
</style>
