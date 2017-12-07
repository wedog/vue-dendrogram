import Dendrogram from './components/Dendrogram..vue'

export function install(Vue, options){
    let vm = Vue
    if (install.installed){
        return
    }
    install.installed = true
    vm.component('VueDendrogram', Dendrogram);
}