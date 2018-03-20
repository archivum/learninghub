<template>
  <div>
    <h1>Luna - Hi! I'm a component called Luna (Parent)</h1>
    <h2>Luna - {{lmsg}} from the Prj8.vue file</h2>
    <Flea :fmsg='fmessage'></Flea>

  </div>
</template>


<script>

import Flea from './VueFlea.vue'

export default {
  // going to be importing the following props
  props: [
  'lmsg'
  ],
  // going to import the following component
  components: {
  'Flea': Flea
  },
data() {
  return {
  fmessage: 'Sending props into Flea'
      }
    }
}

</script>


