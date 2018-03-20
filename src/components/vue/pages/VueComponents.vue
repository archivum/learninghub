<template>
  <div>
  	<h1>7 - Components</h1>
    <p>Relevant Tags:</p>
    <p class='tag'>components</p>
    <div class='split-line'>
      <hr/>
    </div>
    <!-- PROJECT START -->
    <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

    <!--  Building Components /

    Working with components

    COMPONENT CHILD

    1. Make a new .vue file

    2 You can generate a component by only using a <template> tag

    COMPONENT PARENT

    3.1 Go to where you want the component nested and import it

    import ‘yourComponent’ from URL

    3.2 Add below to your parent

        export default {

          components: {

          'NamedComponent': yourComponent

          }

        }

    3.3 Then you can add as it’s own element <yourComponent> inside that parent

    -->

    <message-renamed/>
  </div>
</template>

<script>

import VueMessage from '@/components/vue/VueComponents/VueMessage.vue'

export default {

components: {
  'message-renamed': VueMessage //The components that are imported can be renamed here
}

}
</script>




