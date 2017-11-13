<template lang="html">
    <section class="intro">
		<div class="container">
			<div class="row justify-content-between">
				<div class="col-md-4">
					<img :src="info.gravatar" class="rounded-circle img-fluid d-block mx-auto" alt="Profile Picture">
				</div>
				<div class="col-md-6">
					<h1 class="text-right">{{ info.headline }}</h1>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
    name: 'intro',

    props: {
        info: Object
    }
}
</script>
