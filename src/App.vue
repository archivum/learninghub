<template>
  <div class="wrapper">
    <Logo class='logo'></Logo>
    <Header class='header'></Header>
    <List class='list'></List>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrapper {
  display: grid;
  grid-template-columns: 1fr 4fr;
}
.wrapper > div {
  padding: 2em;

}
.logo {
background: #f9f9f9;
}
.header {
background: #f0f0f0;
}
.list {
background: #e5e5e5;
}

.project1 {
background: green;
}

@media screen and (max-width: 760px) {
  
 .wrapper {
  grid-template-columns: 1fr;
} 

}

</style>
