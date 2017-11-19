<template lang="html">

    <div>
        <div v-if="account === 'teamtreehouse'" class="row profile">
            <div class="col-md-6">
                <div class="points">
                    <p id="totalpts" class="totalpts">{{data.points.total}}</p>
                    <p class="total">Total Points</p>
                    <ul>
                        <li><span class="fa fa-circle html"></span>HTML: {{data.points.HTML}}</li>
                        <li><span class="fa fa-circle css"></span>CSS: {{data.points.CSS}}</li>
                        <li><span class="fa fa-circle js"></span>JavaScript: {{data.points.JavaScript}}</li>
                        <li><span class="fa fa-circle wp"></span>Wordpress: {{data.points.WordPress}}</li>
                        <li><span class="fa fa-circle devtools"></span>Development Tools: {{data.points['Development Tools']}}</li>
                        <li><span class="fa fa-circle php"></span>PHP: {{data.points.PHP}}</li>
                    </ul>
                    <p><a href="https://teamtreehouse.com/matharris" target="_blank">See more at Team Treehouse >></a></p>
                </div>
            </div>
            <div class="col-md-6">
                <div id="badges" class="badges">
                    <h3>Recent Badges</h3>
                    <div v-for="badge in recent" class='tthbadge'>
                        <img :src="badge.icon_url" alt="">
                        {{badge.name}}
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="account === 'codeschool'" class="profile">
            <div class="row points">
                <div class="col-md-4">
                    <span class="totalpts">{{data.user.total_score}}</span>
                    <p class="total">Total Points</p>
                </div>
                <div class="col-md-4">
                    <span class="totalpts">{{data.courses.completed.length}}</span>
                    <p class="total">Completed Courses</p>
                </div>
                <div class="col-md-4">
                    <span class="totalpts">{{data.badges.length}}</span>
                    <p class="total">Total Badges</p>
                </div>
            </div>
            <div class="row badges">
                <div class="col-md-6">
                    <h3>Recent Completed Courses</h3>
                    <ul>
                        <li v-for="(badge,index) in data.courses.completed" v-if="index <= 5">
                            <img :src="badge.badge" :alt="badge.title">
                            {{badge.title}}
                        </li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <div id="cdschool-badges">
                        <h3>Recent Badges</h3>
                        <ul>
                            <li v-for="(badge,index) in data.badges" v-if="index <= 5">
                                <img :src="badge.badge" :alt="badge.name">
                                {{badge.name}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h4><a href="https://www.codeschool.com/users/sirrah_tam">See my full report card at Code School >></a></h4>
        </div>

    </div>

</template>

<script>
import $ from 'jquery'

export default {
    'name': 'profile',

    data () {
        return {
            data: [],
            recent: []
        }
    },

    watch: {
        data: function (data) {
            if (this.account === 'teamtreehouse') {
                this.recentBadges(data.badges)
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
                    this.data = response
                })
                .fail(function (error) {
                    console.log(error)
                })
        },
        recentBadges (badges) {
            let badgeNum = badges.length - 1
            let lastfourbadges = badges.length - 4
            for (let i = badgeNum; i >= lastfourbadges; i--) {
                this.recent.push(badges[i])
            }
        }
    },

    created () {
        this.callRequest(this.api)
    }
}
</script>

<style lang="css">
</style>
