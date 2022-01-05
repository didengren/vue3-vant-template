import Cookies from 'js-cookie'
import type { keyOfCookies } from '#/cache'

export const getTokenFromCache = (type: keyOfCookies) => Cookies.get(type)

export const setTokenFromCache = (type: keyOfCookies, payload: string) => Cookies.set(type, payload)

export const removeTokenFromCache = (type: keyOfCookies) => Cookies.remove(type)
