<template>
  <div class="wrapper">
  	<div class='text'>{{ title }}</div>
  </div>
</template>

<script>
  export default {
    name:'hub-header',
    props: [
      'title'
    ]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
 /*triggers grid*/
  display: grid;
  /*sets the amount of columns we have*/
  grid-template-columns: 1fr;
  /*all sub items will triggered be moved by this global function*/
  align-items:center;
}
.text {
	/*in this case, ONLY the triggered moved by the following code*/
	justify-self:start;
}
</style>
