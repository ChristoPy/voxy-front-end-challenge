# voxy-front-end-challenge
This code challenge aims to build the following app:

* A table that shows students and their info.
* Table rows can be sorted.
* Students can be searched in a search bar.

## Dependencies
This project uses:
* [Vue 3](https://v3.vuejs.org/)

*Good to have the [Volar](https://github.com/johnsoncodehk/volar) IDE plugin installed (Vue 3 only)*

# Architecture
The project has two architectural approaches:

* DDD:
    * Each folder has its own context and functionalities
* Functional:
    * With Vue's [Composition API](https://v3.vuejs.org/api/composition-api.html) this project uses composable functions

# Folders
* assets
    * Icons, images, etc
* components
    * Application components separated by their own scope
* composables
    * Composition API functions that wraps core functionalities
* constants
    * All app constants separated by scope
* contexts
    * Composition API based stores for state management
* core
    * Core functions implemented in vanilla JavaScript
* mocks
    * Students mock to be used

## Project setup
```
npm install
```

### Run tests for core functions
```
npm run test
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
