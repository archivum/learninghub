<template>
  <div class="4">
  	<h1>Conditionals</h1>
    <p>Relevant Tags:</p>
    <p class='tag'>v-on:click</p>
    <p class='tag'>v-if</p>
    <p class='tag'>v-else</p>
    <div class='split-line'>
      <hr/>
    </div>
    <!-- PROJECT START -->
    <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <button v-on:click='show =!show'>Show / Hide</button>
    <p v-if="show">I'm part-time visible!</p>
    <p v-else>Am I visible?</p>
    <p v-show='show'>Here's a show!</p>
    <!-- Only hides, doesn't actually remove from DOM -->

  </div>
</template>

<script>
	
export default {

 data() {
    return {
     show: true,
     persons: [

     {
      name: 'Max', age: 27 
     },
     {
      name: 'Peter', age: 21 
      },
      {
      name: 'Tom', age: 31 
      }


     ] 

 } 
}
}

</script>

