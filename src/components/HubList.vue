<template>
  <div class="container list">
    <div class='nav'>
    <ul v-if="list.length > 0">
      <li><router-link v-for="(item, index) in list" :key="index" :to='item.url'>{{ item.label }}<br/></router-link></li>
    </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hub-list',
    props: [
      'list'
    ]
  }
</script>

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
