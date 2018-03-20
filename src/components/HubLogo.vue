<template>
  <div class="logo center">
    <img :src="logo">
  </div>
</template>

<script>
  //TODO fix logo component
  export default {
    name: 'hub-logo',
    props: [
      'logo'
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
