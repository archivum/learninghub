<template>
  <div class="7">
  	<h1>⚠ 7 - Components</h1>
    <p>Relevant Tags:</p>
    <!-- <p class='tag'>!</p> -->
    <div class='split-line'>
      <hr/>
    </div>
    <!-- PROJECT START -->
    <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

    <!--  Building Components /

    Working with components

    COMPONENT CHILD

    1. Make a new .vue file

    2.1 You can do this by only using a <template> tag

    COMPONENT PARENT

    3.1 Go to where you want the component nested and import it

    import ‘yourComponent’ from URL

    3.2 Add it to your parent

        export default {

          components: {

          'NamedCompnent': yourComponent

          } 

        }

    3.3 Then you can add as it’s own element <yourComponent> inside that parent

    -->

    <app-message></app-message>
  </div>
</template>

<script>

import Message from './Prj7-message.vue'

export default {

components: {
  'app-message': Message
}

}
</script>




