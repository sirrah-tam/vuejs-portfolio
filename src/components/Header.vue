<template>
    <header>
		<nav class="navbar navbar-inverse navbar-static-top">
			<div class="container">
				<div class="navbar-header">
					<a href="index.html" class="navbar-brand">
						{{ siteName }}
					</a>
					<div class="collapse navbar-collapse pull-right" id="main-nav">
						<ul class="nav navbar-nav">
							<li><a href="#about">About</a></li>
							<li><a href="#projects">Projects</a></li>
							<li><a href="#profilesTTH">Profiles</a></li>
						</ul>
					</div>
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
    export default {
        name: 'page-header',
        data () {
            return {
                siteName: 'Sirrah Tam | Mat Harris'
            }
        }
    }
</script>
