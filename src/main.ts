import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from '@/store'
import router, { setupRouter } from '@/router'
import { setupRouterGuard } from '@/router/guard'
import { setupGlobalTransaction } from '@/global'

const bootstrap = () => {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)

  setupRouterGuard(router)

  setupGlobalTransaction(app)

  app.mount('#app')
}

bootstrap()
