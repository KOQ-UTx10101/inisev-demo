# inisev-demo: by Utkrisht Singh Chauhan

## Commands

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Project Overview

This project uses Nuxt.js (v2) + ExpressJS without any extra plugins.

### `api`

The api directory contains the expressjs backend that will be served by Nuxt.js done to expose the `GET /api/users` endpoint.

### `components`

The components directory contains the `UserCard` & `UserModal` Vue.js components used to build the `/users` page.

### `layouts`

Two Layouts have been created `default` acts as the guest layout & `loggedin` which facilitates protecting and displaying pages that require auth.

### `pages`

This directory contains the application views and routes.

### `static`

This directory contains the static files.

### `store`

This directory contains the Vuex store used to manage the Authentication state for the application.

### `task`

Contains the task related information.
