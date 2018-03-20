<template>
  <div>
    <p>I am the 'Message' PARENT component</p>
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
