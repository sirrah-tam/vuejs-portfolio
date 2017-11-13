<template lang="html">

    <div>
        <div v-for="badge in response.badges" class='tthbadge'>
            <img :src="badge.icon_url" alt="">
        </div>

        <div class="points">
            <p id="totalpts" class="totalpts"></p>
            <p class="total">Total Points</p>
            <ul>
                <li><span class="fa fa-circle html"></span>HTML: <span id="htmlpts"></span></li>
                <li><span class="fa fa-circle css"></span>CSS: <span id="csspts"></span></li>
                <li><span class="fa fa-circle js"></span>JavaScript: <span id="jspts"></span></li>
                <li><span class="fa fa-circle wp"></span>Wordpress: <span id="wp"></span></li>
                <li><span class="fa fa-circle devtools"></span>Development Tools: <span id="devtools"></span></li>
                <li><span class="fa fa-circle php"></span>PHP: <span id="php"></span></li>
            </ul>
            <p><a href="https://teamtreehouse.com/matharris" target="_blank">See more at Team Treehouse >></a></p>
        </div>

    </div>

</template>

<script>
import $ from 'jquery'

export default {
    'name': 'profile',

    data () {
        return {
            response: []
        }
    },

    watch: {
        response: function (response) {
            if (this.account === 'teamtreehouse') {
                console.log(response.badges)
            } else {
                 console.log('test')
            }
        }
    },

    props: {
        account: String,
        api: Object
    },

    methods: {
        callRequest (api) {
            $.ajax(api)
                .done(response => {
                    this.response = response
                })
                .fail(function (error) {
                    console.log(error)
                })
        }
    },

    created () {
        this.callRequest(this.api)
    }
}
</script>

<style lang="css">
</style>
