<template>
  <div class="wrapper">
    <vue-logo class='logo'/>
    <vue-header class='header'/>
    <vue-list class='list'/>
    <router-view/>
  </div>
</template>

<script>
  // Logo
  import VueLogo from '@/components/vue/VueLogo'
  // Header
  import VueHeader from '@/components/vue/VueHeader'
  // List / Menu
  import VueList from '@/components/vue/VueList'

export default {
  name: 'App',
  components: {
    VueLogo,
    VueHeader,
    VueList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrapper {
  display: grid;
  grid-template-columns: 1fr 4fr;
}
.wrapper > div {
  padding: 2em;

}
.logo {
background: #f9f9f9;
}
.header {
background: #f0f0f0;
}
.list {
background: #e5e5e5;
}

.project1 {
background: green;
}

@media screen and (max-width: 760px) {

 .wrapper {
  grid-template-columns: 1fr;
}

}

</style>
