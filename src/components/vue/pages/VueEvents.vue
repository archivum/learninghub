<template>
  <div class="10">
  	<h1>Events</h1>
    <p>Relevant Tags:</p>
    <p class='tag'>!</p>
    <div class='split-line'>
    <hr/>
    </div>

<!-- PROJECT START -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

  <vue-boss/>

  </div>
</template>

<script>

// imports the 'Boss' Vue file so we can use it
import VueBoss from '@/components/vue/VueEvents/VueBoss.vue'

export default {
// Allows for this file to use the <Boss></Boss> tags inside the <template>
  components: {
    VueBoss
  }
}

</script>
