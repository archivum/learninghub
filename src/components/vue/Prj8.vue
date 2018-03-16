<template>
  <div class="8">
  	<h1>Props</h1>
    <p>Relevant Tags:</p>

    <p class='tag'>!</p>
    <div class='split-line'>
      <hr/>
    </div>
    <!-- PROJECT START -->
    <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <Luna :lmsg='message'></Luna>
  </div>
</template>

<script>
  
import Luna from './Prj8-Luna.vue'

export default {

data() {

return {

message: 'Sending props into Luna'

}

},


  components: {

  'Luna': Luna

  } 

}

</script>
<!-- 
1.1

In order to pass props you first begin by defining the prop in the data() section, in this case use 'message'

1.2

The next thing you do is you create a binding data point called ':msg' which is not defined here but will be defined in the 'Luna.vue' file

1.3

Inside of 'Luna.vue' we pass props and then define the 'msg' data

1.4

Now the Luna.vue file has access to the data from one above, in this case the 'Prj.8' file
 -->