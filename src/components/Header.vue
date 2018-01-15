<template>
    <header class="sticky-top">
		<nav class="navbar navbar-dark bg-dark">
			<div class="container">
                <a href="/" class="navbar-brand">{{ info.siteName }}</a>
                <main-nav :links="links" id="main-nav" class="collapse"></main-nav>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-nav" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
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
