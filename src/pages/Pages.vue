<template>
  <div class="hello">
    <div class="app-header">
		<router-link to="/">page1</router-link>
		<router-link to="/page2">page2</router-link>
		<router-link to="/page3">page3</router-link>
		<router-link to="/error">error</router-link>
	</div>
	<transition name="fade">
		<span>
		  <keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		  </keep-alive>
		  <router-view v-if="!$route.meta.keepAlive"></router-view>
		</span>
	</transition>
	<mt-button size="small" @click="refreshPage">刷新页面</mt-button>
  </div>
</template>

<script>
export default {
  name: 'Pages',
  inject:['reload'],
  data () {
    return {
     
	}
  },
  methods:{
	refreshPage(){
		this.reload()
	}
  },
  watch:{
	//'$route':
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
