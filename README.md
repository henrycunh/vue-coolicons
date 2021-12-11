![](./public/banner.png)

> **DEPRECATED**
Please use **[unplugin-icons](https://github.com/antfu/unplugin-icons)**, it supports much more icon libraries and has much better tooling!

# vue-coolicons
A really lightweight Vue component for the coolicons icon library with Typescript support.

## Icon list
You can search for the icons on the [official coolicons
page](https://coolicons.cool/), upon clicking on a icon you can just use it's
**name** on the **`is`** property of the component.
> e.g. **`chevron_big_up`** would become something like `<vc-icon
> is="chevron_big_up"/>`

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
