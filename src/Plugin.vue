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
          icon="delete"
          has-icon-only
          variant="dark"
          icon-description="reset"
          type="button"
          @click="resetJson"
        />
      </SbGroupButton>
    </div>
    <input 
      v-on:focus="$event.target.select()" 
      ref="clone" 
      class="hide"
      readonly 
      :value="JSON.stringify(model.schema)"
    />
    <vue-json-editor
      v-model="model.schema"
      mode="code"
      :modes="['code']"
      :show-btns="false"
      :exapnded-on-start="true"
      lang="zh"
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
      handler(value) {
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
    onError(value) {
      console.warn('Json schema:', value)
    },
    resetJson() {
      this.model.schema = {}
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
div.jsoneditor {
  border: solid 2px #09b3af;
}
.jsoneditor-poweredBy,
.jsoneditor-menu {
  display: none;
}
</style>
