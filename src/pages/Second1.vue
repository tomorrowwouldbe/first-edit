<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<div class="test">
		<span class="test_txt">私たちの存在</span>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Second1',
  data () {
    return {
      msg: 'second1'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.test{
	color:#ddd;
	&_txt{
		color:red;
	}
}
</style>
