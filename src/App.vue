<template>
  <div class="wrapper">
    <hub-logo class='logo' :logo="tutorial[$route.path.split(`/`)[1]].logo"/>
    <hub-header class='header' :title="tutorial[$route.path.split(`/`)[1]].title"/>
    <hub-list class='list' :list="tutorial[$route.path.split(`/`)[1]].list"/>
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
  },
  data() {
    return {
      tutorial: {
        vue: {
          name: 'vue',
          list: [
            {url: '/vue/click', label: '1 - Learning the Basics'},
            {url: '/vue/bind', label: '2 - Binding Attributes'},
            {url: '/vue/computed', label: '3 - Computed Properties'},
            {url: '/vue/conditions', label: '4 - Conditionals'},
            {url: '/vue/filters', label: '5 - Filters'},
            {url: '/vue/lists', label: '6 - Lists'},
            {url: '/vue/components', label: '7 - Components'},
            {url: '/vue/props', label: '8 - Props'},
            {url: '/vue/router', label: '9 - Vue Router'},
            {url: '/vue/events', label: '10 - Events'},
          ],
          logo: '@/assets/vue-logo.png',
          title: 'Learning VUE one component at a time.'
        }
      }
    }
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
