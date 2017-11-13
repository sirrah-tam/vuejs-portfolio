<template>
    <header class="sticky-top">
		<nav class="navbar navbar-dark bg-dark">
			<div class="container">
                <a href="/" class="navbar-brand">{{ info.siteName }}</a>
                <main-nav :links="links"></main-nav>
			</div>
		</nav>
	</header>
</template>

<script>
    import Nav from './Nav.vue'

    export default {
        name: 'page-header',

        props: {
            links: Array,
            info: Object
        },

        components: {
            'main-nav': Nav
        }
    }
</script>
