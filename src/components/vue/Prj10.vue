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

  <Boss></Boss>
  
  </div>
</template>

<script>

// imports the 'Boss' Vue file so we can use it
import Boss from './Prj10-Boss.vue'

export default {
// Allows for this file to use the <Boss></Boss> tags inside the <template>
  components: {
  'Boss': Boss
  } 
}

</script>