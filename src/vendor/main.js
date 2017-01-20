import Vue from 'vue'
import Plugin from '../Plugin.vue'

new Vue({
  data() {
    return {
      schema: {},
      model: undefined
    }
  },
  el: 'body',
  components: { Plugin },
  methods: {
    update(v) {
      this.model = v
    }
  }
})
