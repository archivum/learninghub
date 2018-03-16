<template>
  <div class="4">
  	<h1>Lists</h1>
    <p>Relevant Tags:</p>
    <p class='tag'>v-for</p>
    <p class='tag'>index</p>
    <div class='split-line'>
      <hr/>
    </div>
    <!-- PROJECT START -->
    <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <ul>
      <!-- A wrong way would be to type persons[0].name one by one but this would be tedious and wouldn't allow us a reactive flow -->
      <!-- - person is arbitrary, it's use defining what we want to search for and setting a value -->
      <!-- - persons is going into our data object below to fetch the info -->
      <li v-for="(person, index) in persons">{{index + 1 }} {{person.name}}</li>
      <!-- You can get access to the index of the person by enclosing person in a ( ) and adding second argument like this: v-for="(person, index) in persons" where index is defined by me -->
    </ul>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
