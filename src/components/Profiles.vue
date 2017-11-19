<template lang="html">
    <div>
        <section v-for="profile in profiles" :id="profile.handle" :class="profile.handle">
    		<div class="container-fluid">
    			<div class="row">
    				<div class="col-md-8 mx-auto">
    					<div class="header">
                            <div class="row">
                                <div class="col-xs-3 col-md-2">
                                    <a :href="profile.link">
                                        <img class="icon" :src="profile.logo" alt="profile.name">
                                    </a>
                                </div>
                                <div class="col-xs-9 col-md-10" :id="profile.handle + '__heading'">
                                    <h2 class="panel-title">
                                        <a role="button" data-toggle="collapse" :data-parent="'#' + profile.handle" :href="'#' + profile.handle + '-collapse'" aria-expanded="false" aria-controls="profilesTTH-collapse">
                                            {{ profile.name }}<span class="fa fa-caret-down"></span>
                                        </a>
                                    </h2>
                                </div>
                            </div>
    					</div>
    					<div :id="profile.handle + '-collapse'" class="panel-collapse collapse" role="tabpanel" :aria-labelledby="profile.handle + '__heading'">
    						<profile :account="profile.handle" :api="profile.api"></profile>
    					</div>
    				</div>
    			</div>
    		</div>
    	</section>
    </div>
</template>

<script>
import Profile from './Profile'

export default {
    'name': 'profiles',

    components: {
        'profile': Profile
    },

    props: {
        profiles: Array
    }
}
</script>

<style lang="css">
</style>
