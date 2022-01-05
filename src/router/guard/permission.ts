import type { Router } from 'vue-router'
import useUserStore from '@/store/modules/user'
import { getQueryStringArgs } from '@/tools/utils'
import { TOKEN_KEY } from '@/enums/cacheEnum'

const paramsFromUri = getQueryStringArgs()

export const createPermissionGuard = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const userStore = useUserStore()

    if (paramsFromUri.token) {
      console.log('Get token origin')
      userStore.setToken(paramsFromUri.token)

      next()
    } else if (userStore.getToken) {
      console.log('There is a token in store')

      next()
    } else {
      console.log('No token in store')
      alert('令牌不存在，请重新访问')

      next()
    }
  })
}
