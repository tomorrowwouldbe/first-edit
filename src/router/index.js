import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/pages/HelloWorld'
//import Page2 from '@/pages/Page2'
//import Page3 from '@/pages/Page3'

//import Second1 from '@/pages/Second1'
//import Second2 from '@/pages/Second2'
//import Second3 from '@/pages/Second3'

Vue.use(Router)

const router = new Router({
  routes: [
	{
		path: '/',
		name:'Pages',
		meta:{
		  requireAuth: true
		},
		component: (resolve)=>require(['@/pages/Pages'], resolve),
		redirect:'/HelloWorld',
		children:[
			{
			  path: '/HelloWorld',
			  name: 'HelloWorld',
			  meta:{
				  requireAuth: true
			  },
			  component: (resolve)=>require(['@/pages/HelloWorld'], resolve)
			},
			{
			  path: '/page2',
			  name: 'Page2',
			  meta:{
				  requireAuth: true
			  },
			  component: (resolve)=>require(['@/pages/Page2'], resolve),
			  redirect:'/second1',
			  children:[
				{
				  path: '/second1',
				  name: 'Second1',
				  component: (resolve)=>require(['@/pages/Second1'], resolve)
				},
				{
				  path: '/second2',
				  name: 'Second2',
				  component: (resolve)=>require(['@/pages/Second2'], resolve)
				},
				{
				  path: '/second3',
				  name: 'Second3',
				  component: (resolve)=>require(['@/pages/Second3'], resolve)
				},
			  ]
			},
			{
			  path: '/page3',
			  name: 'Page3',
			  meta:{
				  keepAlive:true,
				  requireAuth: true
			  },
			  component: (resolve)=>require(['@/pages/Page3'], resolve)
			}
		]
	},
	{
      path: '/login',
      name: 'Login',
      component: (resolve)=>require(['@/pages/Login'], resolve)
    },
	{
      path: '/error',
      name: 'Error',
      component: (resolve)=>require(['@/pages/Error'], resolve)
    },
  ]
})


//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
    if (localStorage.getItem('username')&&localStorage.getItem('password')=='123456') {// 判断是否登录
      next()
    } else {// 没登录则跳转到登录界面
	  console.log('to:'+ to.fullPath)
      next({
        path: '/Login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
 
export default router