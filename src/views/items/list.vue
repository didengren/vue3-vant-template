<template>
  <div id="itemsList">
    <Tabs v-model:active="activeTab" sticky>
      <Tab>
        <template #title>待办</template>
        <div class="list-container">内容1</div>
      </Tab>
      <Tab>
        <template #title>已办</template>
        <div class="list-container">内容2</div>
      </Tab>
    </Tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Tab, Tabs } from 'vant'

export default defineComponent({
  name: 'ItemsList',
  components: { Tab, Tabs },
  data() {
    return {
      activeTab: 0,
    }
  },
})
</script>
<style scoped lang="less"></style>
