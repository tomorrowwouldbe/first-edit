<template>
  <div class="hello">
    <h1 class="h1-text">{{ msg }}</h1>
  </div>
</template>

<script>
import links from "@/config/apis";
import qs from "qs";
export default {
  name: "rank",
  data() {
    return {
      msg: "私たちの存在"
    };
  },
  created() {
    // let params = {
    //   uid: 247605,
    //   user_token: "lushang"
    // };
    // this.$http.post(links.getUserRestaurant, qs.stringify(params)).then(res => {
    //   console.log(res);
    // });
  },
  methods: {
    show() {
      console.log("我是子组件的show方法");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h1-text {
  font-size: 2rem;
}
</style>
