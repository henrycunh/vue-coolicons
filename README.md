![](./public/banner.png)

# vue-coolicons
A really lightweight Vue component for the coolicons icon library with Typescript support.


## Usage
1. Install the dependency.
```bash
yarn add @coolicons/vue
```
### Single Vue component
```vue
<!-- my-component.vue -->
<template>
    <vc-icon is="caret_down" />
</template>

<script setup>
// you can call it whatever you want
import VcIcon from '@coolicons/vue'
import '@coolicons/vue/dist/style.css'
</script>
```

### Globally available
```ts
// main.ts
import Vue from 'vue'
import VueCoolicons from '@coolicons/vue'
import '@coolicons/vue/dist/style.css'

Vue.component('vc-icon', VueCoolicons)
```

### Nuxt 3
```ts
import { defineNuxtPlugin } from '#app'
import VueCoolicons from '@coolicons/vue'
import '@coolicons/vue/dist/style.css' 

export default defineNuxtPlugin(nuxt => {
    nuxt.app.component('vc-icon', VueCoolicons)
})
```

### Nuxt 2
```ts
// plugins/vue-coolicons.ts
import Vue from 'vue'
import VueCoolicons from '@coolicons/vue'
import '@coolicons/vue/dist/style.css'

Vue.component('vc-icon', MyIcon)

// nuxt.config.ts
{
    ...,
    plugins: [
        '~/plugins/vue-coolicons.ts'
    ]
}
```
