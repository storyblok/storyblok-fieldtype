module.exports = {
  extends: ['@boughtbymany/eslint-config-bbm/nuxt'],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'vue/static-class-names-order': 'off', // Doesn't seem to work
    'vuejs-accessibility/label-has-for': [
      'warn',
      {
        components: ['MLabel'],
        required: {
          every: ['id'],
        },
        allowChildren: false,
      },
    ],
    'vuejs-accessibility/form-control-has-label': [
      'warn',
      {
        labelComponents: ['MLabel'],
      },
    ],
  },
}
