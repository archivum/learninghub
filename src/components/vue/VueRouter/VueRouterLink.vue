<template>
  <div>
    <button @click="link()">Home</button>
    <router-view></router-view>
  </div>
</template>

<script>

// import Vue from 'Vue'
// import Router from 'vue-router'

// Vue.use(Router)

export default {
components: {

},
methods: {

link() {
// This is a special function that looks at the route at the top, params is equivelent to parameters and id is what we defined in teh router
console.log(this.$route.params.id)
}


}
}



</script>