import VerticalDendrogram from './components/VerticalDendrogram.vue'
import HorizontalDendrogram from './components/HorizontalDendrogram.vue'

export function install(Vue, options){
    let vm = Vue
    if (install.installed){
        return
    }
    install.installed = true
    vm.component('VerticalDendrogram', VerticalDendrogram);
    vm.component('HorizontalDendrogram', HorizontalDendrogram);
}