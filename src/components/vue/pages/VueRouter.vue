<template>
  <div class="9">
    <h1>Vue Router</h1>
    <p>Relevant Tags:</p>
    <p class='tag'>!</p>
    <div class='split-line'>
      <hr/>
    </div>
    <!-- PROJECT START -->
    <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <VueRouterLink buttonLabel="Home"/>
    <VueRouterLink buttonLabel="Users"/>
    <router-view/>
  </div>
</template>

<script>

  import VueRouterLink from '@/components/vue/VueRouter/VueRouterLink.vue'

  export default {

    components: {
      'VueRouterLink': VueRouterLink
    }

  }

</script>
