<template>
  <div class="container list">
    <div class='nav'>
    <ul>
      <li><router-link to='/vue/click'>1 - Learning the Basics</router-link></li>
      <li><router-link to='/vue/bind'>2 - Binding Attributes</router-link></li>
      <li><router-link to='/vue/computed'>3 - Computed Properties</router-link></li>
      <li><router-link to='/vue/conditions'>4 - Conditionals</router-link></li>
      <li><router-link to='/vue/filters'>5 - Filters</router-link></li>
      <li><router-link to='/vue/filters'>6 - Lists</router-link></li>
      <li><router-link to='/vue/components'>7 - Components </router-link></li>
      <li><router-link to='/vue/props'>8 - Props</router-link></li>
      <li><router-link to='/vue/router'>9 - Vue Router</router-link></li>
      <li><router-link to='/vue/events'>10 - Events</router-link></li>
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
