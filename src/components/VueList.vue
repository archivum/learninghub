<template>
  <div class="container list">
    <div class='nav'>
    <ul>
      <li><router-link to='/'>1 - Learning the Basics</router-link></li>
      <li><router-link to='/2'>2 - Binding Attributes</router-link></li>
      <li><router-link to='/3'>3 - Computed Properties</router-link></li>
      <li><router-link to='/4'>4 - Conditionals</router-link></li>
      <li><router-link to='/5'>5 - Filters</router-link></li>
      <li><router-link to='/6'>6 - Lists</router-link></li>
      <li><router-link to='/7'>7 - Components </router-link></li>
      <li><router-link to='/8'>8 - Props</router-link></li>
      <li><router-link to='/9'>9 - Vue Router</router-link></li>
      <li><router-link to='/10'>10 - Events</router-link></li>
    </ul>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
      display: flex;
    flex-direction: column;
    justify-content: center;
}
li {
  /*display: inline-block;*/
    margin: 0 10px;
    padding: 5px 0px

}
.container {
}

</style>
