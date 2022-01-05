import { TOKEN_KEY } from '@/enums/cacheEnum'

interface catetoriesOfKeysFromCache {
  [TOKEN_KEY]: string | number | null | undefined
}

type catetoriesOfKeysFromCookies = catetoriesOfKeysFromCache

export type keyOfCookies = keyof catetoriesOfKeysFromCookies
