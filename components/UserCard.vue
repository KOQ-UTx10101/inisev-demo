<template>
  <div
    class="user-card"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <img class="user-card__image" :alt="name" :src="image" />
    <div v-show="hovering" class="user-card__details">
      <a
        :href="`mailto:${email}?subject=We%20are%20hiring%21&body=Hello%2C%20${name}.%20We%E2%80%99d%20like%20to%20propose%20you%20an%20offer.`"
        class="user-card__details--email"
      >
        <svg fill="white" viewBox="0 0 75.294 75.294">
          <g>
            <path
              d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
		c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
		H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
		c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
		c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
		c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
		c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"
            />
          </g>
        </svg>
      </a>
      <span class="user-card__details--name">{{ name }}</span>
      <span class="user-card__details--city">{{ city }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    street: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    website: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      hovering: false,
    };
  },
};
</script>

<style scoped>
.user-card {
  height: 300px;
  position: relative;

  cursor: pointer;
}

.user-card__image {
  width: 100%;
  height: 100%;

  border-radius: 10px;
}

.user-card__details {
  width: 100%;
  height: 100%;
  position: absolute;

  top: 0;
  left: 0;

  background-color: black;
  opacity: 0.8;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.271);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);

  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.user-card__details--email {
  width: 50px;
  height: 50px;
}

.user-card__details--name {
  margin-top: 50px;
  width: 100%;

  text-align: center;
  font-size: 24px;
  font-weight: 500;
}

.user-card__details--city {
  margin-top: 20px;
  width: 100%;

  color: rgb(198, 186, 186);

  text-align: center;
  font-weight: 500;
}
</style>
