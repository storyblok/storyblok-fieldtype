import Plugin from '../Plugin.vue'
let init = Plugin.methods.initWith()

window.storyblok.field_types[init.plugin] = Plugin
