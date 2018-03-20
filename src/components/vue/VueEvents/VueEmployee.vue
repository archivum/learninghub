<template>
  <div>
    <h1 v-on:click="changeTitle">{{title}}</h1>
  </div>
</template>

<script>
export default  {

	data() {
		return {
			title: 'James the Employee'
		}
	},
	methods: {
		// A method we want to emit out to the our parent component
		changeTitle(){
			this.$emit('changeTitle', 'James is actually the boss')
		}
	}
}
</script>

