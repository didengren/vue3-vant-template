import type { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { basicRoutes } from './routes'

const router = createRouter({
  history: createWebHashHistory('/'),
  routes: basicRoutes as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export const setupRouter = (app: App<Element>) => app.use(router)

export default router
