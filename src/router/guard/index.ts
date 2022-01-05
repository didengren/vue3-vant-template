import type { Router } from 'vue-router'
import { createPermissionGuard } from './permission'

export const setupRouterGuard = (router: Router) => {
  createPermissionGuard(router)
}
