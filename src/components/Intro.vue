<template lang="html">
    <section class="intro">
		<div class="container">
			<div class="row justify-content-between">
				<div class="col-md-4">
					<img :src="data.gravatar" class="rounded-circle img-fluid d-block mx-auto" alt="Profile Picture">
				</div>
				<div class="col-md-6">
          <div class="text-right" v-html="data.headline"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { db } from '../config/db'

export default {
    name: 'intro',
    firebase: {
      data: {
        source: db.ref('info'),
        asObject: true
      }
    }
}
</script>
