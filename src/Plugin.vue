<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="sb-select-wrap">
    <div class="sb-group-button">
      <form
        method="post"
        target="_blank"
        action="https://search.google.com/test/rich-results"
      >
        <SbButton
          icon="new-window"
          has-icon-only
          icon-description="Rich Results Test"
          size="small"
          type="submit"
        />
        <textarea
          name="code_snippet"
          :value="JSON.stringify(model.schema)"
          class="hide"
          hidden
        />
      </form>
      <form method="post" target="_blank" action="https://validator.schema.org">
        <SbButton
          icon="new-window"
          has-icon-only
          icon-description="Structured Data Testing Tool"
          size="small"
          type="submit"
        />
        <textarea
          name="code"
          :value="JSON.stringify(model.schema)"
          class="hide"
          hidden
        />
      </form>

      <SbGroupButton size="small" variant="primary" has-spaces>
        <SbButton
          icon="copy"
          has-icon-only
          icon-description="copy"
          type="button"
          @click="copyJson"
        />
        <SbButton
          icon="delete"
          has-icon-only
          variant="dark"
          icon-description="reset"
          type="button"
          @click="resetJson"
        />
      </SbGroupButton>
    </div>
    <vue-json-editor
      v-model="model.schema"
      mode="code"
      :modes="['code']"
      :show-btns="false"
      :exapnded-on-start="true"
      lang="zh"
      @json-change="onJsonChange"
      @json-save="onJsonSave"
      @has-error="onError"
    />
    <div v-if="error" class="sb-error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { SbGroupButton, SbButton } from 'storyblok-design-system'
import vueJsonEditor from 'vue-json-editor'

export default {
  components: {
    SbGroupButton,
    SbButton,
    vueJsonEditor,
  },
  mixins: [window.Storyblok.plugin],
  data() {
    return {
      error: '',
    }
  },
  watch: {
    model: {
      handler: function (value) {
        console.log(value)
        this.$emit('changed-model', value)
      },
      deep: true,
    },
  },
  methods: {
    initWith() {
      return {
        plugin: 'schema-markup',
      }
    },
    onJsonChange(value) {
      console.log('value:', value)
    },
    onJsonSave(value) {
      console.log('value:', value)
    },
    onError(value) {
      console.warn('Json schema:', value)
    },
    async copyJson() {
      try {
        await navigator.clipboard.writeText(this.model.schema)
      } catch ($e) {
        this.error = 'Cannot copy JSON to clipboard'
      }
    },
    resetJson() {
      this.model.schema = {
        '@context': 'https://schema.org/',
      }
    },
  },
}
</script>

<style>
.hide {
  display: none;
}
.sb-error {
  color: #ff6159;
  padding: 10px 0;
}
.sb-group-button {
  display: flex !important;
  justify-content: right;
  margin-bottom: 15px;
}
.sb-group-button button {
  margin-right: 10px;
}
div.jsoneditor-menu {
  background-color: #262b33;
  border: 1px solid #00b3b0;
  color: grey;
}
.jsoneditor-poweredBy {
  display: none;
}
</style>
