<template>
  <div class="user-modal">
    <img class="user-modal__image" :alt="name" :src="image" />
    <div class="user-modal__details">
      <div class="user-modal__details__item">
        <svg class="user-modal__details__item--icon" viewBox="0 0 489 489">
          <g>
            <path
              d="M417.4,71.6C371.2,25.4,309.8,0,244.5,0S117.8,25.4,71.6,71.6S0,179.2,0,244.5s25.4,126.7,71.6,172.9S179.2,489,244.5,489
			s126.7-25.4,172.9-71.6S489,309.8,489,244.5S463.6,117.8,417.4,71.6z M244.5,462C124.6,462,27,364.4,27,244.5S124.6,27,244.5,27
			S462,124.6,462,244.5S364.4,462,244.5,462z"
            />
            <path
              d="M244.5,203.2c35.1,0,63.6-28.6,63.6-63.6s-28.5-63.7-63.6-63.7s-63.6,28.6-63.6,63.6S209.4,203.2,244.5,203.2z
			 M244.5,102.9c20.2,0,36.6,16.4,36.6,36.6s-16.4,36.6-36.6,36.6s-36.6-16.4-36.6-36.6S224.3,102.9,244.5,102.9z"
            />
            <path
              d="M340.9,280.5c-22.3-32.8-54.7-49.5-96.4-49.5s-74.1,16.6-96.4,49.5c-16.6,24.4-27.2,57.7-31.4,98.7
			c-0.8,7.4,4.6,14.1,12,14.8c7.4,0.8,14.1-4.6,14.8-12c8.5-82.3,42.5-124,101-124s92.5,41.7,101,124c0.7,6.9,6.6,12.1,13.4,12.1
			c0.5,0,0.9,0,1.4-0.1c7.4-0.8,12.8-7.4,12-14.8C368.1,338.1,357.5,304.9,340.9,280.5z"
            />
          </g>
        </svg>

        <span class="user-modal__details__item--text">{{ name }}</span>
      </div>
      <div class="user-modal__details__item">
        <svg
          class="user-modal__details__item--icon"
          viewBox="0 0 75.294 75.294"
        >
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

        <a
          class="user-modal__details__item--text"
          :href="`mailto:${email}?subject=We%20are%20hiring%21&body=Hello%2C%20${name}.%20We%E2%80%99d%20like%20to%20propose%20you%20an%20offer.`"
        >
          {{ email }}
        </a>
      </div>
      <div class="user-modal__details__item">
        <svg
          class="user-modal__details__item--icon"
          viewBox="0 0 202.592 202.592"
        >
          <path
            style="fill: #010002"
            d="M198.048,160.105l-31.286-31.29c-6.231-6.206-16.552-6.016-23.001,0.433l-15.761,15.761
			c-0.995-0.551-2.026-1.124-3.11-1.732c-9.953-5.515-23.577-13.074-37.914-27.421C72.599,101.48,65.03,87.834,59.5,77.874
			c-0.587-1.056-1.145-2.072-1.696-3.038l10.579-10.565l5.2-5.207c6.46-6.46,6.639-16.778,0.419-23.001L42.715,4.769
			c-6.216-6.216-16.541-6.027-23.001,0.433l-8.818,8.868l0.243,0.24c-2.956,3.772-5.429,8.124-7.265,12.816
			c-1.696,4.466-2.752,8.729-3.235,12.998c-4.13,34.25,11.52,65.55,53.994,108.028c58.711,58.707,106.027,54.273,108.067,54.055
			c4.449-0.53,8.707-1.593,13.038-3.275c4.652-1.818,9.001-4.284,12.769-7.233l0.193,0.168l8.933-8.747
			C204.079,176.661,204.265,166.343,198.048,160.105z M190.683,176.164l-3.937,3.93l-1.568,1.507
			c-2.469,2.387-6.743,5.74-12.984,8.181c-3.543,1.364-7.036,2.24-10.59,2.663c-0.447,0.043-44.95,3.84-100.029-51.235
			C14.743,94.38,7.238,67.395,10.384,41.259c0.394-3.464,1.263-6.95,2.652-10.593c2.462-6.277,5.812-10.547,8.181-13.02l5.443-5.497
			c2.623-2.63,6.714-2.831,9.112-0.433l31.286,31.286c2.394,2.401,2.205,6.492-0.422,9.13L45.507,73.24l1.95,3.282
			c1.084,1.829,2.23,3.879,3.454,6.106c5.812,10.482,13.764,24.83,29.121,40.173c15.317,15.325,29.644,23.27,40.094,29.067
			c2.258,1.249,4.32,2.398,6.17,3.5l3.289,1.95l21.115-21.122c2.634-2.623,6.739-2.817,9.137-0.426l31.272,31.279
			C193.5,169.446,193.31,173.537,190.683,176.164z"
          />
        </svg>

        <span class="user-modal__details__item--text">{{ phone }}</span>
      </div>
      <div class="user-modal__details__item">
        <svg
          class="user-modal__details__item--icon"
          viewBox="0 0 489.075 489.075"
        >
          <path
            d="M482.453,220.775l-115.5-111.2v-88.5c0-11.4-9.4-20.8-20.8-20.8s-20.8,9.4-20.8,20.8v48.5l-66.6-64.1
		c-7.3-7.3-19.8-7.3-28.1,0l-223.6,215.3c-8.3,8.3-9.4,20.8-1,29.1c8.4,8.3,20.8,9.4,29.1,1l3.1-3v220.4c0,11.4,9.4,20.8,20.8,20.8
		h372.4c11.4,0,19.8-9.4,20.8-19.8v-219.3l2.1,2c15.2,10.5,26,3.1,29.1-2.1C490.753,241.575,490.753,228.075,482.453,220.775z
		 M281.653,448.575h-72.8v-111.3h72.8V448.575z M410.653,448.575h-88.4v-132.1c0-11.4-9.4-20.8-20.8-20.8h-113.4
		c-11.4,0-20.8,9.4-20.8,20.8v132.1h-87.4v-203.9h330.8V448.575L410.653,448.575z M83.853,204.175l161.4-155l159.8,155H83.853z"
          />
        </svg>

        <span class="user-modal__details__item--text"
          >{{ city }}, {{ street }}</span
        >
      </div>
      <div class="user-modal__details__item">
        <svg class="user-modal__details__item--icon" viewBox="0 0 24 24">
          <g data-name="Layer 2">
            <g data-name="globe">
              <rect
                width="24"
                height="24"
                transform="rotate(180 12 12)"
                opacity="0"
              />
              <path
                d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"
              />
            </g>
          </g>
        </svg>

        <span class="user-modal__details__item--text">{{ website }}</span>
      </div>
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
};
</script>

<style scoped>
.user-modal {
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
}

.user-modal__image {
  width: 100%;
  height: 50%;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.user-modal__details {
  width: 100%;
  height: 50%;

  background-color: white;

  padding: 10px 20px;
  padding-left: 40px;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.user-modal__details__item {
  display: flex;
  align-items: center;
  margin: 10px 10px;
}

.user-modal__details__item .user-modal__details__item--icon {
  fill: black;
  width: 30px;
  height: 30px;
}

.user-modal__details__item .user-modal__details__item--text {
  color: black;
  margin-left: 14px;
  font-size: 16px;
}

@media (min-width: 480px) {
  .user-modal {
    padding: 20px 40px;
  }
}

@media (min-width: 768px) {
  .user-modal {
    width: 75%;
    height: 75%;

    padding: 0 0;

    display: flex;
    flex-direction: row;
  }

  .user-modal__image {
    width: 30%;
    height: 100%;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .user-modal__details {
    width: 70%;
    height: 100%;

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .user-modal__details__item .user-modal__details__item--icon {
    width: 50px;
    height: 50px;
  }

  .user-modal__details__item .user-modal__details__item--text {
    margin-left: 25px;
    font-size: 28px;
  }
}
</style>
