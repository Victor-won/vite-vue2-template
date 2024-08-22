<template>
    <div>
      {{ msg }}
      <HelloWorld msg="Hello Vue 2 + TypeScript + Vite" />
    </div>
  </template>

  <script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'App',
    data() {
      return {
        msg: 'Hello TypeScript with Vue 2!'
      };
    },
    components: {
      HelloWorld: () => import('./components/HelloWorld.vue')
    }
  });
  </script>

  <style scoped>
  div {
    color: blue;
  }
  </style>
