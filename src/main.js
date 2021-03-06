// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueFire from 'vuefire'
import firebase from 'firebase'
import App from './App'
import router from './router'

import $ from 'jquery'

Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    data: {

    },
    template: '<App/>',
    components: {
        App
    }
})
