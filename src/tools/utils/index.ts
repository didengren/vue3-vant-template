/**
 * 获取url参数
 */
export function getQueryStringArgs(): Record<string, string | undefined> {
  //取得查询字符串并去掉开头的问号
  let qs
  if (window.location.search) {
    qs = window.location.search.substring(1)
  } else if (window.location.hash) {
    qs = window.location.hash.substring(1)
    if (qs.split('?')[1]) {
      qs = qs.split('?')[1].substring(0)
    } else {
      return {}
    }
  } else {
    return {}
  }

  const items = qs && qs.length ? qs.split('&') : [] // 取得每一项
  const len = items.length
  const args: Record<string, string | undefined> = {} //保存数据的对象
  let item = null,
    name = null,
    value = null,
    //在for 循环中使用
    i = 0
  //逐个将每一项添加到args 对象中
  for (i = 0; i < len; i++) {
    item = items[i].split('=')
    name = decodeURIComponent(item[0])
    value = decodeURIComponent(item[1])
    if (name.length) {
      args[name] = value
    }
  }
  return args
}
