<template>
  <div>
    <p>Here's an awesome message!</p>
    <app-input></app-input>
  </div>
</template>

<script>

import input from './VueInput.vue'

export default {

components: {
  'app-input': input
}

}
</script>
