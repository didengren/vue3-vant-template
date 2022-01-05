import type { App } from 'vue'
import VConsole from 'vconsole'

export const setupGlobalTransaction = (app: App<Element>) => {
  new VConsole({ maxLogNumber: 1000 })
}
