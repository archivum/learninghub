<template>
  <div class="wrapper">
    <div class="nav">
      <router-link to="/vue">Vue</router-link>
      <router-link to="/react">React</router-link>
      <router-link to="/css">CSS</router-link>

    </div>
  	<div class='text'>{{ title }}</div>
  </div>
</template>

<script>
  export default {
    name:'hub-header',
    props: {
      title: {
        type: String,
        required: true
      }
    }
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
