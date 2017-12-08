import Vue from 'vue'
import VueDendrogram from 'vue-dendrogram'
import 'normalize.css'
import './app.css'
import programs from './programs.json'

Vue.use(VueDendrogram)

new Vue({
    name: 'root',
    data: {
        programs: programs
    },
    methods: {
        itemGo(url){
            window.location.href = url;
        }
    },
    mounted(){

    },
    template: '<div id="app">' +
        '<horizontal-dendrogram :data-list="programs" @itemEvent:url="itemGo"></horizontal-dendrogram>' +
    '</div>'
}).$mount("#app");