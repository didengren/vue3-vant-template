import type { AppRouteModule } from '@/router/types'

const items: AppRouteModule = {
  path: '/items',
  name: 'items',
  component: () => import('@/views/items/index.vue'),
  children: [
    {
      path: 'list',
      name: 'itemsList',
      component: () => import('@/views/items/list.vue'),
      meta: { title: '事项' },
    },
  ],
}

export default items
