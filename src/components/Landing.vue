<template>
  <div class="landing-container">
    <p v-if="$route.path.split(`/`).length < 3">{{ $route.path.toUpperCase().split('/')[1] + ' Landing Page' }}</p>
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'landing'
    }
</script>

<style scoped>

</style>
