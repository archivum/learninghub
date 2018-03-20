<template>
  <div class="logo center">
    <router-link :to="`/` + name"><img :src="logo"></router-link>
  </div>
</template>

<script>
  //TODO fix logo component
  export default {
    name: 'hub-logo',
    props: [
      'logo',
      'name'
    ]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
