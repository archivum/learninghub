<template>
  <div>
  	<h1>Binding Attributes</h1>
    <p>Relevant Tags:</p>
    <p class='tag'>v-bind:class</p>
    <p class='tag'>$event.target.value</p>
    <div class='split-line'>
      <hr/>
    </div>
    <!-- PROJECT START -->
	<!-- We're connecting the input to the cssClass data property. $event is generic JS to capture the event, then it's target, then the value. -->
    <input type="text" v-on:input='cssClass=$event.target.value'>
	<p v-bind:class='cssClass'>Class: {{ cssClass }}</p>
  </div>
</template>

<script>
	
export default {

 data() {
    return {
    	cssClass: 'Default Text ... type away, RED or BLUE.'
    }
  } 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
	background: red;
}
.blue {
	background: blue;
}
</style>
