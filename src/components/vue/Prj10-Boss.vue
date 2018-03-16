<template>
  <div>
    <h1>{{title}}</h1>
    <Employee v-on:changeTitle='updateTitle($event)'></Employee>
  </div>
</template>

<script>
  
import Employee from './Prj10-Employee.vue'

export default {
// Sets data for what dynamic content we want to update
  data() {
  	return {

  		title: 'Peter is the Boss'
  	}
  },
  components: {
// Allows for this file to use the <Employee></Employee> tags inside the <template>
  'Employee': Employee
  },
  methods: {
  	updateTitle(updatedTitle){
  		this.title = updatedTitle
  	}
  } 
}

</script>

