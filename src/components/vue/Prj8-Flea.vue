<template>
  <div>
    <h1> Hi! I'm a component called Flea (Child)</h1>
    <h2>Flea - {{fmsg}} from the Luna.vue file</h2>
  </div>
</template>

<script>
export default {
  props: [
  'fmsg'
  ]
}
</script>