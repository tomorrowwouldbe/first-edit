<template>
  <div class="hello">
	<div class="changeBg">
		<span class="user-avatar"></span>
	</div>
    <div class="wrapper" ref="wrapper">
		<ul class="content" ref="content">
			<li v-for="(item,index) in arr" class="item" ref="item" @click="itemClick(index)">{{item}}</li>
		</ul>
	</div>
	<my-test name="我们的存在" :type="testType" @checkedKey="getData"/>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import MyTest from "@/components/test";
export default {
  name: "Page3",
  data() {
    return {
      arr: [],
      testType: 2
    };
  },
  components: { MyTest },
  created() {
    for (let i = 0; i < 20; i++) {
      this.arr.push("base_" + (i + 1));
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods: {
    _initScroll() {
      let width = 0;
      for (let i = 0; i < this.arr.length; i++) {
        width += this.$refs.item[i].getBoundingClientRect().width + 10;
      }

      this.$refs.content.style.width = width + "px";
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: 1,
          click: true,
          scrollX: true,
          scrollY: false,
          startX: 0,
          eventPassthrough: "vertical"
        });
      } else {
        this.scroll.refresh();
      }
    },
    itemClick(idx) {
      //let els=this.$refs.wrapper.getElementsByClassName('item')
      let els = document.getElementsByClassName("item");
      this.scroll.scrollToElement(els[idx - 2 < 0 ? idx : idx - 2], 300, -10);
    },
    getData(data) {
      console.log(data);
      this.testType = data;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  min-height: 50vh;
}
ul {
  list-style: none;
}
.content {
  display: flex;
  justify-content: space-around;
  padding-right: 10px;
}
.content > li {
  margin-left: 10px;
  background-color: #eee;
}
.wrapper {
  width: 100%;
  padding: 5px 0;
  margin-top: 10px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
}

.changeBg {
  height: 30rem;
  animation: changColor 30s infinite;
  background: url(http://www.hangowa.com/wap/images/member_top_bg.png) no-repeat;
  background-size: cover;
  position: relative;
}

@keyframes changColor {
  0% {
    background-color: #ed5564;
  }
  10% {
    background-color: #fb6e52;
  }
  20% {
    background-color: #ffce55;
  }
  30% {
    background-color: #a0d468;
  }
  40% {
    background-color: #48cfae;
  }
  50% {
    background-color: #4fc0e8;
  }
  60% {
    background-color: #5d9cec;
  }
  70% {
    background-color: #ac92ed;
  }
  80% {
    background-color: #ec87bf;
  }
  90% {
    background-color: #ed5564;
  }
}

.user-avatar {
  display: inline-block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 2px solid #fff;
  background: url("http://www.hangowa.com/wap/images/member_w.png") no-repeat;
  position: absolute;
  top: 130px;
  left: 0;
  right: 0;
  margin: auto;
  animation: move 1s ease-in;
}

@keyframes move {
  0% {
    top: -300px;
  }
  30% {
    top: -100px;
  }
  75% {
    top: 145px;
  }
  85% {
    top: 110px;
  }
  95% {
    top: 140px;
  }
  100% {
    top: 130px;
  }
}
</style>
