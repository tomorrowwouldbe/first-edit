<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<mt-swipe :auto="4000" style="height:30vh">
	  <mt-swipe-item style="background:red"></mt-swipe-item>
	  <mt-swipe-item style="background:yellow"></mt-swipe-item>
	  <mt-swipe-item style="background:pink"></mt-swipe-item>
	</mt-swipe>
	
	<div class="app-header">
		<router-link to="/second1">second1</router-link>
		<router-link to="/second2">second2</router-link>
		<router-link to="/second3">second3</router-link>
	</div>
	<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Page2',
  data () {
    return {
      msg: 'page2'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	min-height:50vh;
}
</style>
