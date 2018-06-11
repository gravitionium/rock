import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Register from '@/pages/register'


Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [
		{
		  path: '/',
		  component: Login
		},{
			path:'/register',
			component: Register
		}
	]
})