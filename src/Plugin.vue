<template>
  <div>
    Google snippet preview:
    <div class="p-metatags__preview">
      <div class="p-metatags__google-title">{{ model.title }}</div>
      <div class="p-metatags__google-link">yoursite.com/example</div>
      <div class="p-metatags__google-description">{{ model.description }}</div>
    </div>
    <div class="uk-form-row">
      <label>SEO Title</label>
      <input type="text" v-model="model.title" class="uk-width-1-1">
    </div>

    <div class="uk-form-row">
      <label>Meta description</label>
      <textarea rows="4" v-model="model.description" class="uk-width-1-1"></textarea>
      <div>{{ charCount }} of 156 chars used</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    charCount() {
      return this.model.description.length
    }
  },
  mixins: [window.Storyblok.plugin],
  methods: {
    initWith: function() {
      return {
        plugin: 'metatags',
        title: 'Your title',
        description: 'Your description'
      }
    }
  },
  events: {
    'plugin:created': function() {
      console.log('plugin:created')
    },
    'plugin:destroyed': function() {
      console.log('plugin:destroyed')
    }
  },
  watch: {
    'model': {
      handler: function (value) {
        this.$emit('changed-model', value);
      },
      deep: true
    }
  }
}
</script>

<style>
  .p-metatags__google-title {
    color: blue;
    text-decoration: underline;
  }

  .p-metatags__google-link {
    color: green;
  }

  .p-metatags__preview {
    margin: 5px 0 15px;
    padding: 10px;
    color: #000;
    background: #FFF;
  }
</style>
