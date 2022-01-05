<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import LMain from '@/views/layout/main.vue'
</script>

<template>
  <LMain></LMain>
</template>

<style lang="less">
#app {
  height: 100%;
  font-family: @font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
