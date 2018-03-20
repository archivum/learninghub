<template>
  <div class="3">
  	<h1>Computed Properties</h1>
    <p>Relevant Tags:</p>
    <p class='tag'>computed:</p>
    <p class='tag'>methods:</p>
    <div class='split-line'>
      <hr/>
    </div>
    <!-- PROJECT START -->
    <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
  	<button v-on:click='increment'>Increment</button>
    <p>Counter: {{ counter }}</p>
    <p>Clicks: {{ clicks }}</p>
  </div>
</template>
<script>
	
export default {
 data() {
    return {
      clicks: 0
    }
  },
 methods: {
  increment() {
    this.clicks++;
  }
 },
 // This PROJECT IS about computed properties which are actually methods that help connect data.
 computed: {
  counter() {
    return this.clicks * 2
  }
 } 
}

</script>

