<template lang="html">
    <section class="contact">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6 mx-auto">
					<h2 class="text-center">Where To Find Me</h2>
					<ul class="text-center">
						<li v-for="item in contact">
                            <span :class="'fa ' + item.icon"></span>{{item.type}}: <a :href="item.link">{{item.display}}</a>
                        </li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
    name: 'page-footer',

    props: {
        contact: Array
    }
}
</script>

<style lang="scss">
@import "../scss/variables";

a {
    color: $primary;

    &:hover {
        text-decoration: underline;
    }
}

</style>
