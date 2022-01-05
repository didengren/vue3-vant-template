<template>
  <div class="layout-main">
    <RouterView v-slot="{ Component }">
      <keep-alive :include="cachedViews">
        <component :is="Component" />
      </keep-alive>
    </RouterView>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LMain',
})
</script>
<script lang="ts" setup>
import { unref, computed } from 'vue'
import { useRouter } from 'vue-router'
// const { currentRoute } = useRouter()
// const route = unref(currentRoute)
console.log('route', unref(useRouter().currentRoute))
const cachedViews = computed(() => {
  return []
})
</script>

<style lang="less">
.layout-main {
  position: absolute;
  width: 100%;
  height: 100%; // calc(100% - @page-header-height)
  // top: @page-header-height;
  bottom: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
