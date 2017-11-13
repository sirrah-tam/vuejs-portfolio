<template lang="html">
    <section id="projects" class="projects">
		<div class="container-fluid">
            <div class="header col-md-8 mx-auto">
                <div class="row">
                    <div class="col-xs-3 col-md-2">
                        <span class="fa fa-code"></span>
                    </div>
                    <div class="col-xs-9 col-md-10">
                        <h2 class="panel-title">Recent Projects</h2>
                    </div>
                </div>
            </div>
			<div class="row">
				<div class="col-md-8 mx-auto">
					<div class="row profile">
						<div v-for="project in projects" class="project col-sm-4">
							<figure>
								<a :href="project.link" target="_blank">
									<img :src="project.image" :alt="project.name">
								</a>
							</figure>
							<h3>{{project.name}}</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
    name: 'projects',

    props: {
        projects: Array
    }
}
</script>

<style lang="css">
</style>
