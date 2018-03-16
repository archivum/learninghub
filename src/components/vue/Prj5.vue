<template>
  <div class="Filter">
    <h1>Filter</h1>
    <p>Relevant Tags:</p>
    <p class='tag'>filters:</p>
    <p class='tag'> title1 | uppercase </p>
    <div class='split-line'>
      <hr/>
    </div>
    <!-- PROJECT START -->
    <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <p>{{ title1 | uppercase }}</p>
    <p>{{ title2 | lowercase }}</p>
  </div>
</template>

<script>

// This is a global filter

// Vue.filter('uppercase', function(value){
//   return value.toUpperCase()
// });
  
export default {

 data() {
    return {
      title1: 'title 1',
      title2: 'TITLE 2'
           } 
        },
filters: {
  uppercase(value) {
    return value.toUpperCase()
  },
  lowercase(value) {
    return value.toLowerCase()  }
 } 
}

</script>

