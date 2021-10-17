![](./public/banner.png)

# vue-coolicons
A really lightweight Vue component for the coolicons icon library with Typescript support.


## Usage
1. Install the dependency.
```bash
yarn add @coolicons/vue
```
2. Use it in your component
```vue
<!-- my-component.vue -->
<template>
    <my-icon is="caret_down" />
</template>

<script setup>
// you can call it whatever you want [: 
import MyIcon from '@coolicons/vue'
import '@coolicons/vue/dist/style.css'
</script>
```

3. Or register globally
```ts
// main.ts
import Vue from 'vue'
import MyIcon from '@coolicons/vue'
import '@coolicons/vue/dist/style.css'

Vue.component('my-icon', MyIcon)
```
