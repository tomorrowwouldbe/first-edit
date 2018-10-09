<template>
  <div class="hello">
    <h1 @click="jumpToHome">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Second2',
  data () {
    return {
      msg: 'second2'
    }
  },
  methods:{
	jumpToHome(){
		this.$router.push({
			path:'/',
			query:{
				isBack:true
			}
		})
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
