<template>
  <div class="content 1">
  	<h1>Learning the Basics</h1>
    <p>Relevant Tags:</p>
    <p class='tag'>v-on:click</p>
    <div class='split-line'>
      <hr/>
    </div>
    <!-- PROJECT START -->
    <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- This a directive = v:on -->
    <!-- The click is what we want it to listen to -->
    <!-- The = is what we want it to execute -->
    <h2>{{title}}</h2>

    <button v-on:click="title = 'BTN 1 TITLE CHANGED!'">BTN2 - Change Title</button>
    <br>
    - - - - - - - - - - - - - -
    <!-- here's another example but using a METHOD inside the data     -->
    <br>
    <h2>{{title2}}</h2>
    <button v-on:click="changeTitle">BTN1 - Change Title</button>
    <br> 
  </div>
</template>

<script>
  
export default {
// We're passing data to the template above through the data method 
 data() {
    return {
      title: 'BTN 1 TITLE',
      title2: 'BTN 2 TITLE'
    }
  },
  methods: {
    changeTitle(){
      this.title2 = 'BTN 2 TITLE CHANGED!!'
    }
  } 
}

</script>
