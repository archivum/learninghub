<template>
  <div class="wrapper">
    <hub-logo class='logo'/>
    <hub-header class='header'/>
    <hub-list class='list'/>
    <router-view/>
  </div>
</template>

<script>
  // Logo
  import HubLogo from '@/components/HubLogo'
  // Header
  import HubHeader from '@/components/HubHeader'
  // List / Menu
  import HubList from '@/components/HubList'

export default {
  name: 'App',
  components: {
    HubLogo,
    HubHeader,
    HubList
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
