import Vue from 'vue'
import Router from 'vue-router'
import data from '../../static/data.json'
import About from '../components/About'
import Projects from '../components/Projects'
import Profiles from '../components/Profiles'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name: 'home',
		component: About
	},
	{
		path: '/about',
		name: 'about',
		component: About
	},
	{
		path: '/projects',
		name: 'projects',
		component: Projects,
		props: {
			projects: data.config.projects
		}
	},
	{
		path: '/profiles',
		name: 'profiles',
		component: Profiles,
		props: {
			profiles: data.config.profiles
		}
	}],
	scrollBehavior (to, from, savedPosition) {
		return {
			selector: '#test',
			offset: {
				y: 60
			}
		}
	}
})
