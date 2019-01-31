<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<img :src="userPic" :onerror="defaultPic" class="user-img">
	<Rank ref="componentRank" />
	
	<div class="bscroll" ref="bscroll">
		<div class="bscroll-container">
			<ul>
				<li class="li_yzy" v-for="(item,index) in arr">{{item.title}}</li>
			</ul>
		</div>
	</div>
	<mt-button size="small" @click="clearStorage">清除缓存</mt-button>
  </div>
</template>

<script>
import Rank from "@/components/rank";
import BScroll from "better-scroll";
import { Toast } from "mint-ui";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "1111",
      userPic: "",
      defaultPic: 'this.src="' + require("../assets/1.jpg") + '"',
      arr: [],

      /**
       * 1 滚动的时候会派发scroll事件，会截流。
       * 2 滚动的时候实时派发scroll事件，不会截流。
       * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
      probeType: {
        type: Number,
        default: 1
      },
      // 点击列表是否派发click事件
      click: {
        type: Boolean,
        default: true
      },
      //是否开启横向滚动
      scrollX: {
        type: Boolean,
        default: false
      },
      // 是否派发滚动事件
      listenScroll: {
        type: Boolean,
        default: true
      },
      // 列表的数据
      data: {
        type: Array,
        default: null
      },
      // 是否派发滚动到底部的事件，用于上拉加载
      pullup: {
        type: Boolean,
        default: false
      },
      //是否派发顶部下拉的事件，用于下拉刷新
      pulldown: {
        type: Boolean,
        default: false
      },
      // 是否派发列表滚动开始的事件
      beforeScroll: {
        type: Boolean,
        default: false
      },
      //当数据更新后，刷新scroll的延时。
      refreshDelay: {
        type: Number,
        default: 20
      }
    };
  },
  components: { Rank },
  mounted() {
    this.$nextTick(() => {
      this._initData();
      console.log(this.$refs.componentRank);
      this.$refs.componentRank.show();

      Toast({
        message: `提示：客官，您的菜还没有好！`,
        position: "bottom",
        duration: 5000
      });

      if (!this.$refs.bscroll) {
        return;
      }

      // better-scroll的初始化
      this.scroll = new BScroll(this.$refs.bscroll, {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX,
        listenScroll: this.listenScroll
      });

      // 是否派发滚动事件
      /*if (this.listenScroll) {
          let me = this
          this.scroll.on('scroll', (pos) => {
		  
          })
        }*/

      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullup) {
        this.scroll.on("scrollEnd", () => {
          // 滚动到底部
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            console.log("滚动到底部");
          }
        });
      }

      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        this.scroll.on("touchEnd", pos => {
          // 下拉动作
          if (pos.y > 50) {
            console.log("下拉刷新");
          }
        });
      }

      // 是否派发列表滚动开始的事件
      /*if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {

          })
        }*/
    });
  },
  methods: {
    _initData() {
      for (let i = 0; i < 20; i++) {
        this.arr.push({
          title: "basebasebasebasebasebase_" + (i + 1),
          idx: +i + 1
        });
      }
    },
    clearStorage() {
      localStorage.clear();
      this.$router.push({ name: "Error", params: { username: "" } });
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
</style>
