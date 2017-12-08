import Vue from 'vue'
import VueDendrogram from 'vue-dendrogram'
import 'normalize.css'
import './app.css'
import programs from './programs.json'

Vue.use(VueDendrogram)

new Vue({
    name: 'root',
    data: {
        offsetTop: '48px',
        programList: [],
        pageIndex: 1,
        pageSize: 20,
        dataTotal: 0
    },
    methods: {
        getProgramList(pageIndex){
            let vm = this;
            vm.pageIndex = pageIndex || vm.pageIndex;
            setTimeout(function(){
                vm.programList = vm.programList.concat(programs.slice(vm.pageIndex-1, vm.pageSize));
                vm.dataTotal = programs.length;
            }, 3000)
        }
    },
    mounted(){
        this.getProgramList();
    },
    template: '<div id="app">' +
        '<vertical-dendrogram></vertical-dendrogram>' +
    '</div>'
}).$mount("#app");