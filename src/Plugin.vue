<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="sb-select-wrap">
    <div class="sb-toolbar">
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
        <form
          method="post"
          target="_blank"
          action="https://validator.schema.org"
        >
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
    </div>
    <input
      ref="clone"
      class="hide"
      readonly
      :value="JSON.stringify(model.schema)"
      @focus="$event.target.select()"
    />
    <vue-json-editor
      v-model="model.schema"
      mode="code"
      :modes="['code']"
      :show-btns="false"
      :exapnded-on-start="true"
      lang="zh"
      @json-change="onJsonChange"
      @has-error="onError"
    />
    <div v-if="error" class="sb-error">
      {{ error }}
    </div>
    <hr />
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
  computed: {
    schemaType() {
      if (!this.model.schema) {
        return ''
      }
      return this.model.schema['@type']
    },
  },
  watch: {
    model: {
      handler(value) {
        if (value.blockedSchema[value.schema['@type']]) {
          this.error = `${value.schema['@type']} is a blocked schema type`
          return
        }

        this.$emit('changed-model', value)
      },
      deep: true,
    },
  },
  methods: {
    initWith() {
      return {
        plugin: 'schema-markup',
        blockedSchema: {
          WebPage: true,
        },
      }
    },
    onJsonChange() {
      this.error = ''
    },
    onError(value) {
      this.error = value.toString()
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
.sb-toolbar {
  display: flex;
  justify-content: flex-end;
}
.sb-options > h3 {
  margin: 20px 0;
}
.sb-options-group {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sb-options-group__checkbox {
  margin-bottom: 16px;
}
.sb-group-button {
  align-items: flex-end;
}
.sb-group-button button {
  margin-left: 10px;
  margin-bottom: 10px;
}
div.jsoneditor {
  border: solid 2px #09b3af;
}
.jsoneditor-poweredBy,
.jsoneditor-menu {
  display: none;
}
</style>
