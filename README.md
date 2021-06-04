# vue-lunch-and-learn-advanced

This is a simple repository to help with learning some of the advanced features of Vue.js which was used in the Advanced Vue.js L&L run in Dekker in May 2021.

The project was created using the Vue-Cli tool by manually choosing to include Vue3, VueX and Vue Router.

The `solutions` folder contains various files which demonstrate examples of the following:

- Vue Router
- VueX
- Composition API
- Render functions and JSX
- Slots

## Vue Router

The `views/CounterPage.vue` file is an example of a page which expects a parameter of `initial` which is passed through props and is accessible on `$route`.

## VueX

The `components/CounterState.vue` file is an example of how to use a VueX store (without modules) to centrally manage the state for the counter built in the Intro to Vue.js L&L.

It uses the mapState, mapGetters and mapActions helpers rather than accessing these from `$store` directly.

## Composition API

The `components/CounterComposition.vue` file is an example of how to use the composition API to build the counter from the Intro to Vue.js L&L, rather than the options API.

The composable `components/useCounter.js` file contains the extracted logic, however this could be included directly in the setup property of the counter.

## Render functions and JSX

The `components/CustomButtonJSX.vue` file is an example of using render functions with JSX to create the button component, rather than the template approach.

Please note, the `@vue/babel-plugin-jsx` was installed to make using JSX possible and was registed as a plugin in the `babel.config.js` file.

## Slots

The `components/SlotExample.vue` is an example of using named and scoped slots within a component.

The SlotExample is registered and used in the `views/About.vue` file which acts as the parent and defines the content of the slots.