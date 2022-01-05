import { AppRouteModule } from '../types'

const modules = import.meta.globEager('./modules/**/*.ts')

const routeModuleList: AppRouteModule[] = []

Object.keys(modules).forEach((key) => {
  const _module = modules[key].default || {}
  const _moduleToArray = Array.isArray(_module) ? [..._module] : [_module]
  routeModuleList.push(..._moduleToArray)
})

export const basicRoutes = [...routeModuleList]
