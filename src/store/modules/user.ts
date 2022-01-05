import { defineStore } from 'pinia'
import { TOKEN_KEY } from '@/enums/cacheEnum'
import { getTokenFromCache, setTokenFromCache } from '@/tools/auth'

interface UserState {
  token?: string | undefined
}

const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: undefined,
  }),
  getters: {
    getToken(): string | undefined {
      return this.token || getTokenFromCache(TOKEN_KEY)
    },
  },
  actions: {
    setToken(payload: string | undefined) {
      this.token = (payload || '') as string
      setTokenFromCache(TOKEN_KEY, this.token)
    },
  },
})

export default useUserStore
