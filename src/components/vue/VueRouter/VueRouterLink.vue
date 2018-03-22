<template>
  <router-link :to="`/vue/router/` + buttonLabel.toLowerCase()">
    <button>{{ buttonLabel }}</button>
  </router-link>
</template>

<script>

// import Vue from 'Vue'
// import Router from 'vue-router'

// Vue.use(Router)

export default {
props: [
  'buttonLabel'
],
}



</script>
