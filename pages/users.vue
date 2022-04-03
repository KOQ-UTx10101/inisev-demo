<template>
  <div class="page">
    <header class="page__header">
      <div @click="showSideBar = !showSideBar">
        <svg
          v-if="!showSideBar"
          class="page__header__sb-toggle"
          viewBox="0 0 100 80"
        >
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
        <svg v-else class="page__header__sb-toggle" viewBox="0 0 100 100">
          <g>
            <path
              d="M62.819,47.97l32.533-32.534c0.781-0.781,0.781-2.047,0-2.828L83.333,0.586C82.958,0.211,82.448,0,81.919,0
		c-0.53,0-1.039,0.211-1.414,0.586L47.97,33.121L15.435,0.586c-0.75-0.75-2.078-0.75-2.828,0L0.587,12.608
		c-0.781,0.781-0.781,2.047,0,2.828L33.121,47.97L0.587,80.504c-0.781,0.781-0.781,2.047,0,2.828l12.02,12.021
		c0.375,0.375,0.884,0.586,1.414,0.586c0.53,0,1.039-0.211,1.414-0.586L47.97,62.818l32.535,32.535
		c0.375,0.375,0.884,0.586,1.414,0.586c0.529,0,1.039-0.211,1.414-0.586l12.02-12.021c0.781-0.781,0.781-2.048,0-2.828L62.819,47.97
		z"
            />
          </g>
        </svg>
      </div>

      <nuxt-link to="/" class="page__header__title">
        <app-logo class="page__header__title--logo" />
        <span class="page__header__title--text">Inisev</span>
      </nuxt-link>
    </header>

    <main class="page__content">
      <aside v-if="showSideBar" class="page__content__sidebar">
        <div class="page__content__sidebar__top">
          <nuxt-link
            v-for="idx in 4"
            :key="idx"
            to="#"
            class="page__content__sidebar__top__item"
          >
            MENU ITEM
          </nuxt-link>
        </div>
        <div class="page__content__sidebar__bottom">
          <div class="page__content__sidebar__bottom__item" @click="logout">
            <svg
              class="page__content__sidebar__bottom__item--icon"
              viewBox="0 0 489.9 489.9"
            >
              <g>
                <path
                  d="M468.3,255.8c0.1-0.1,0.1-0.1,0.2-0.2c0.3-0.4,0.6-0.7,0.8-1.1c0.1-0.1,0.1-0.2,0.2-0.3c0.2-0.4,0.5-0.8,0.7-1.2
				c0-0.1,0.1-0.2,0.1-0.2c0.2-0.4,0.4-0.8,0.6-1.3c0-0.1,0-0.1,0.1-0.2c0.2-0.4,0.3-0.9,0.5-1.4c0-0.1,0-0.2,0.1-0.2
				c0.1-0.5,0.3-0.9,0.3-1.4c0-0.2,0-0.3,0.1-0.5c0.1-0.4,0.1-0.8,0.2-1.2c0.1-0.6,0.1-1.1,0.1-1.7c0-0.6,0-1.1-0.1-1.7
				c0-0.4-0.1-0.8-0.2-1.2c0-0.2,0-0.3-0.1-0.5c-0.1-0.5-0.2-0.9-0.3-1.4c0-0.1,0-0.2-0.1-0.2c-0.1-0.5-0.3-0.9-0.5-1.4
				c0-0.1,0-0.1-0.1-0.2c-0.2-0.4-0.4-0.9-0.6-1.3c0-0.1-0.1-0.2-0.1-0.2c-0.2-0.4-0.4-0.8-0.7-1.2c-0.1-0.1-0.1-0.2-0.2-0.3
				c-0.3-0.4-0.5-0.8-0.8-1.1c-0.1-0.1-0.1-0.1-0.2-0.2c-0.4-0.4-0.7-0.9-1.2-1.3l-98.9-98.8c-6.7-6.7-17.6-6.7-24.3,0
				c-6.7,6.7-6.7,17.6,0,24.3l69.6,69.6H136.8c-9.5,0-17.2,7.7-17.2,17.1c0,9.5,7.7,17.2,17.2,17.2h276.8l-69.1,69.1
				c-6.7,6.7-6.7,17.6,0,24.3c3.3,3.3,7.7,5,12.1,5s8.8-1.7,12.1-5l98.3-98.3C467.5,256.6,467.9,256.2,468.3,255.8z"
                />
                <path
                  d="M110.7,34.3h128c9.5,0,17.2-7.7,17.2-17.1c0-9.5-7.7-17.2-17.2-17.2h-128C59.4,0,17.6,41.8,17.6,93.1v303.7
				c0,51.3,41.8,93.1,93.1,93.1h125.9c9.5,0,17.2-7.7,17.2-17.1c0-9.5-7.7-17.2-17.2-17.2H110.7c-32.4,0-58.8-26.4-58.8-58.8V93.1
				C52,60.6,78.3,34.3,110.7,34.3z"
                />
              </g>
            </svg>
            <span class="page__content__sidebar__bottom__item--text"
              >Logout</span
            >
          </div>
        </div>
      </aside>

      <div class="page__content__users">
        <div class="page__content__users__head">
          <span class="page__content__users__head__title"><u>USERS</u></span>
        </div>
        <div class="page__content__users__content">
          <div
            v-for="user in users"
            :key="user.id"
            @click="showUser = user.id - 1"
          >
            <UserCard
              :name="user.name"
              :image="user.image"
              :email="user.email"
              :street="user.address.street"
              :city="user.address.city"
              :phone="user.phone"
              :website="user.website"
            />
          </div>
        </div>
        <div v-if="showUser != -1" class="page__content__users__modal">
          <UserModal
            :name="users[showUser].name"
            :image="users[showUser].image"
            :email="users[showUser].email"
            :street="users[showUser].address.street"
            :city="users[showUser].address.city"
            :phone="users[showUser].phone"
            :website="users[showUser].website"
          />
          <svg
            class="page__content__users__modal--closebtn"
            viewBox="0 0 100 100"
            @click="showUser = -1"
          >
            <g>
              <path
                d="M62.819,47.97l32.533-32.534c0.781-0.781,0.781-2.047,0-2.828L83.333,0.586C82.958,0.211,82.448,0,81.919,0
		c-0.53,0-1.039,0.211-1.414,0.586L47.97,33.121L15.435,0.586c-0.75-0.75-2.078-0.75-2.828,0L0.587,12.608
		c-0.781,0.781-0.781,2.047,0,2.828L33.121,47.97L0.587,80.504c-0.781,0.781-0.781,2.047,0,2.828l12.02,12.021
		c0.375,0.375,0.884,0.586,1.414,0.586c0.53,0,1.039-0.211,1.414-0.586L47.97,62.818l32.535,32.535
		c0.375,0.375,0.884,0.586,1.414,0.586c0.529,0,1.039-0.211,1.414-0.586l12.02-12.021c0.781-0.781,0.781-2.048,0-2.828L62.819,47.97
		z"
              />
            </g>
          </svg>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { Context } from "@nuxt/types";

import UserCard from "../components/UserCard.vue";
import UserModal from "../components/UserModal.vue";

export default Vue.extend({
  name: "UsersPage",
  components: { UserCard, UserModal },
  layout: "loggedin",
  async asyncData({ $axios }: Context) {
    const users = await $axios.$get("/users");
    return { users };
  },
  data() {
    return {
      showSideBar: false,
      showUser: -1,
    };
  },
  head: {
    title: "Users - Inisev Demo",
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
  },
});
</script>

<style scoped>
.page {
  width: 100vw;
  height: 100vh;
  position: relative;

  overflow: hidden;

  display: flex;
  flex-direction: column;

  background-color: #080710;
}

.page__header {
  margin: 15px 15px;

  width: 100%;

  display: flex;
  align-items: center;
}

.page__header__sb-toggle {
  height: 12.5px;
  fill: white;
  cursor: pointer;
}

.page__header__title {
  text-decoration: none;
}

.page__header__title--logo {
  height: 25px;
  margin-left: 12.5px;
}

.page__header__title--text {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  margin-left: 12.5px;
}

.page__content {
  width: 100%;
  height: 100%;
  position: relative;

  overflow: hidden;

  display: flex;
  align-items: center;
}

.page__content__sidebar {
  width: 100%;
  height: 100%;
  position: absolute;

  z-index: 20;

  padding: 5px 10px;

  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1em;
}

.page__content__sidebar__top {
  margin-bottom: 5px;
  width: 100%;
  height: 80%;
  background-color: blue;
  border-radius: 10px;
  backdrop-filter: blur(50px);
  border: 2px solid blue;
  box-shadow: 0 0 40px blue;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page__content__sidebar__top__item {
  text-decoration: none;
  cursor: pointer;
  margin: 10px;

  padding: 10px 15px;

  display: flex;

  border-radius: 10px;
}

.page__content__sidebar__top__item:hover {
  background-color: dodgerblue;
}

.page__content__sidebar__top__item--icon {
  fill: white;
  width: 20px;
  margin: 0 5px;
}

.page__content__sidebar__bottom {
  margin-top: 5px;
  width: 100%;
  height: 20%;
  background-color: orangered;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid orangered;
  box-shadow: 0 0 40px orangered;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page__content__sidebar__bottom__item {
  text-decoration: none;
  cursor: pointer;
  margin: 10px;

  padding: 10px 15px;

  display: flex;

  border-radius: 10px;
}

.page__content__sidebar__bottom__item:hover {
  background-color: red;
}

.page__content__sidebar__bottom__item--icon {
  fill: white;
  width: 20px;
  margin: 0 5px;
}

.page__content__users {
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5px;
}

.page__content__users__head {
  width: 100%;

  margin-bottom: 10px;

  display: flex;
  justify-content: flex-end;
}

.page__content__users__head__title {
  margin-right: 25px;

  font-size: 38px;
  font-weight: 500;
  line-height: 48px;
  text-underline-offset: 10px;
}

.page__content__users__content {
  width: 100%;

  overflow-x: hidden;
  overflow-y: auto;

  margin-top: 10px;

  padding: 10px 25px;

  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 4rem;
  justify-content: center;
}

.page__content__users__modal {
  width: 100%;
  height: 100%;
  position: absolute;

  top: 0;
  left: 0;

  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(10px);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);

  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page__content__users__modal--closebtn {
  width: 30px;
  height: 30px;
  position: absolute;

  top: 30px;
  right: 40px;

  fill: white;

  cursor: pointer;
}

@media (min-width: 480px) {
  .page__content__users__content {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .page__content__users__modal--closebtn {
    top: calc(50% - (75%) / 2 - 20px);
    right: calc(50% - (75%) / 2 + 20px);
  }
}

@media (min-width: 640px) {
  .page__content__sidebar {
    position: relative;
    width: 25%;
  }
}

@media (min-width: 768px) {
  .page__content__users__modal--closebtn {
    top: calc(50% - (75%) / 2 + 30px);
    right: calc(50% - (75%) / 2 + 40px);

    fill: black;
  }
  .page__content__users__content {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .page__content__users__content {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
