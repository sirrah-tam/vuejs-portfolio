<template>
	<div id="app">

		<page-header :links="config.links" :info="config.info"></page-header>

		<intro :info="config.info"></intro>

		<router-view id="test"/>

		<page-footer :contact="config.info.contact"></page-footer>
	</div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import data from '../static/data.json'

export default {
	name: 'app',
	components: {
		'page-header': Header,
		'page-footer': Footer,
		'intro': Intro
	},
	data () {
		return {
			config: data.config
		}
	}
}
</script>

<style lang="scss">
	@import './scss/main';
</style>
