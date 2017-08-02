import Vue from 'vue'
import Plugin from '../Plugin.vue'

new Vue({
  data() {
    return {
      schema: {},
      model: undefined,
      spaceId: '40882',
      loggedIn: false
    }
  },
  el: 'body',
  components: { Plugin },
  ready() {
    this.login()
  },
  methods: {
    update(v) {
      this.model = v
    },

    api(path) {
      return VueGlobal.app.$resource(path)
    },

    login() {
      let user = VueGlobal.app.$resource('users/{id}', {}, {
        login: {method: 'POST', url: 'users/login'
      }})

      user.login({email: 'storyblok.com+fieldtype@gmail.com', password: 'fieldtype'})
        .then((res) => {
          window.VueHttpOptions.headers['Authorization'] = res.data.access_token
          window.localStorage.setItem('token', res.data.access_token)
          window.localStorage.setItem('role', res.data.role || 'normal')
          window.localStorage.setItem('userId', res.data.user_id)

          this.loggedIn = true
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
})
