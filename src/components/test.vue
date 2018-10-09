<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<p class="test-p">
		<label>
			<input v-if="type==1" type="radio" name="type" value="1" checked @click="radiocCheck(1)" />
			<input v-else type="radio" name="type" value="1" @click="radiocCheck(1)" />
			1
		</label>
	</p>
	<p class="test-p">
		<label>
			<input v-if="type==2" type="radio" name="type" value="2" checked @click="radiocCheck(2)" />
			<input v-else type="radio" name="type" value="2" @click="radiocCheck(2)" />
			2
		</label>
	</p>
	<p class="test-p">
		<label>
			<input v-if="type==3" type="radio" name="type" value="3" checked @click="radiocCheck(3)" />
			<input v-else type="radio" name="type" value="3" @click="radiocCheck(3)" />
			3
		</label>
	</p>
	<mt-radio
	  class="radio-group"
	  title="单选框列表"
	  align="right"
	  v-model="value"
	  :options="['选项A', '选项B', '选项C']">
	</mt-radio>
	<p>{{address}}</p>
	<p>{{street}}</p>
	<p>{{streetNumber}}</p>
	<p>{{lat}}</p>
	<p>{{lng}}</p>
  </div>
</template>

<script>
import qs from 'qs';
export default {
  name: 'test',
  data () {
    return {
      msg: '私たちの存在',
	  arr:[1,2,3],
	  value:'选项A',
	  address:'',
	  street:'',
	  streetNumber:'',
	  lat:'',
	  lng:'',
    }
  },
  props:{
	type:{
		type:Number,
		default:1
	}
  },
  created(){
	let params={
		uid: 247605,
		user_token:'lushang'
	}
	params=qs.stringify(params)
	this.$http.post('/api/MeasurePlan/getUserRestaurant',params).then((res)=>{
		console.log(res)
	})
	
	//判断手机浏览器是否支持定位
	if(navigator.geolocation) {
		var geolocation = new BMap.Geolocation(); //创建定位实例
		geolocation.getCurrentPosition(this.getLocation, {
			enableHighAccuracy: true
		}); //enableHighAccuracy 要求浏览器获取最佳结果
	} else {
		map.addControl(new BMap.GeolocationControl()); //添加定位控件 支持定位
	}
  },
  methods:{
	radiocCheck(idx){
		console.log(idx)
		this.$emit('checkedKey',idx)
	},
	getLocation(){
		var self = this; 
		var geolocation = new BMap.Geolocation(); 
		geolocation.getCurrentPosition(function(r){ 
			console.log(r)
			self.lng=r.point.lng
			self.lat=r.point.lat
			if(r.point.lng&&r.point.lat){
				var myGeo = new BMap.Geocoder();
				myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(result){
					console.log(result)
					self.address=result.addressComponents.province+result.addressComponents.city+result.addressComponents.district+result.addressComponents.street+result.addressComponents.streetNumber
					self.street=result.addressComponents.street
					self.streetNumber=result.addressComponents.streetNumber
				})
			}
		});
	}
  },
  watch:{
	value(newVal,oldVal){
		console.log(newVal,oldVal)
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.radio-group{
	text-align:left;
}
.test-p{
	text-align:left;
	height:30px;
	line-height:30px;
}
</style>
