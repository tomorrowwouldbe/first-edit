//该测试项目实现了哪些功能

1、配置了相关设置可以用ip访问，手机端可以访问（见package.json）
2、引用了axios,设置了跨域解决方法（见config文件夹三个文件）
3、页面切换的动画 transition/router-view/router-link
4、二级菜单 router-view
5、引用mint-ui(移动端用mint-ui，PC端用element-ui)
6、引用better-scroll，纵向滚动/横向滚动
7、默认图片的设置
8、子组件与父组件之间的通信
9、引用百度地图（感觉定位不够精准）
10、页面按需加载
11、拦截器的作用：请求的统一处理
12、keep-alive的处理
13、登录授权，优化完成    （见路径：router/index.js）
14、页面刷新
15、跳转页面{name:'',params:{}}/{path:'',query:{}}
16、Rem的使用
17、引用sass

small-points
1、路由replace：this.$router.replace({path:'/index',query:{}})  /  this.$router.replace('/index')   （见路径：pages/Login.vue）
2、input框回车触发事件：@keydown.enter="enter"   （见路径：pages/Login.vue）