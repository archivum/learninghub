<template>
  <div class="logo center">
    <router-link :to="`/` + name"><img class="logo" :src="logoFct"></router-link>
  </div>
</template>

<script>
  export default {
    name: 'hub-logo',
    props: {
      logo: {
        type: String,
        required: true
      },
      name: {
        type: String
      }
    },
    computed: {
      logoFct () {
        return require('../assets/logos/' + this.logo)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 100px;
}
</style>
