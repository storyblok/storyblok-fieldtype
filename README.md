> **⚠️ DEPRECATION NOTICE ⚠️**
>
> This package (`storyblok-fieldtype`) is **deprecated** and no longer actively maintained.
>
> Please use the new official SDK, **`@storyblok/field-plugin`**, for developing custom field plugins for Storyblok. The new SDK offers a more robust, framework-agnostic approach and is the standard going forward.
>
> *  **➡️ New projects should use `@storyblok/field-plugin`.**
> *  **➡️ Existing projects should migrate.**
>
> Find the new SDK here:
> *   **GitHub:** [https://github.com/storyblok/field-plugin](https://github.com/storyblok/field-plugin)
> *   **Documentation:** [https://www.storyblok.com/docs/packages/storyblok-field-plugin](https://www.storyblok.com/docs/packages/storyblok-field-plugin)
>
> Thank you for your understanding.

# Storyblok Field-Type

> A Storyblok Field-Type Plugin Starter Project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

In the browser, you will see the white screen with the following error in the console:
```
[Vue warn]: Error in created hook: "SyntaxError: Failed to execute 'postMessage' on 'Window': Invalid target origin 'null//app.storyblok.com' in a call to 'postMessage'."

DOMException: Failed to execute 'postMessage' on 'Window': Invalid target origin 'null//app.storyblok.com' in a call to 'postMessage'.
```
But don't worry, this project is just a template and only works as part of the storyblok app. See: 
https://www.storyblok.com/docs/plugins/enable-local-dev-mode

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
https://www.storyblok.com/docs/Guides/Creating-a-field-type-plugin#how-to-develop-plugins-locally
