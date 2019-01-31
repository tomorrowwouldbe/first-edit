<template>
  <div class="hello">
	<p class="head">登录</p>
	<p class="input_yzy">
		<input v-model="username" placeholder="请输入用户名" />
	</p>
	<p v-if="username.length>0" class="input_yzy">
		<input type="password" v-model="password" placeholder="请输入密码" @keydown.enter="pwdInput" />
	</p>
	<p v-if="username.length>0&&password.length>0" class="login-btn">
		<mt-button type="default" size="small" @click="pwdInput">登录</mt-button>
	</p>
  </div>
</template>

<script>
import Rank from "@/components/rank";
import BScroll from "better-scroll";
import apis from "@/config/apis";
import qs from "qs";
export default {
  name: "HelloWorld",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {
    // console.log(this.$route.query.redirect)
  },
  methods: {
    pwdInput(e) {
      let params = {
        uid: 247605,
        user_token: "lushang"
      };
      this.$http
        .post(apis.getUserRestaurant, qs.stringify(params))
        .then(res => {
          console.log(res);
          // if(res.data.code==200){
          // 	localStorage.setItem('username',this.username)
          // 	localStorage.setItem('password',this.password)
          // 	//this.$router.push({path:this.$route.query.redirect,query:{}})
          // 	console.log(this.$route.query.redirect)
          // 	this.$router.replace(this.$route.query.redirect)
          // }
          localStorage.setItem("username", this.username);
          localStorage.setItem("password", this.password);
          // this.$router.replace(this.$route.query.redirect);
          this.$router.replace({
						path:this.$route.query.redirect,
						query:{}
					});
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.li_yzy {
  line-height: 50px;
}
.bscroll {
  width: 100%;
  height: 50vh;
  overflow: hidden;
}

.hello .head {
  text-align: center;
  line-height: 100px;
}
.input_yzy input {
  height: 30px;
  line-height: 29px;
  font-size: 16px;
  padding: 0 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  outline: 0;
  width: 80%;
}

.login-btn {
  padding: 50px 10%;
}
</style>
