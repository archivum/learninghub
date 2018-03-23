<template>
  <router-link :to="`/vue/router/` + buttonLabel.toLowerCase()">
    <button>{{ buttonLabel }}</button>
  </router-link>
</template>

<script>

export default {
props: [
  'buttonLabel'
],
}

</script>
