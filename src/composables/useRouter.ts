/**
 * 路由跳转
 * @param {string} path 目标路由地址
 * @param {Record<string, any>} query 路由参数
 * @param {boolean} replace 是否替换当前页面
 * @param {boolean} tabBar 是否跳转到 tabBar 页面
 */
interface Router {
  path: string
  query?: Record<string, any>
  replace?: boolean
  tabBar?: boolean
}

function useRouter(config: { webview: string }) {
  function setQuery(params: Record<string, any>) {
    return Object.entries(params) // 将对象转换成 [key, value] 数组
      .map(([key, value]) => `${encodeURI(key)}=${encodeURI(JSON.stringify(value))}`) // 将每个数组元素转换成 key=value 字符串，需要对 value 进行 JSON 序列化和 URL 编码
      .join('&') // 将数组用 & 符号连接成字符串
  }

  function push(arg: string | Router) {
    let url = ''
    let replace = false
    let tabBar = false
    if (typeof arg === 'string') {
      url = arg
    }
    else {
      const queryParams = setQuery(arg?.query || {})
      url = `${arg?.path}?${queryParams}`
      replace = arg?.replace || false
      tabBar = arg?.tabBar || false
    }

    const isLink = url.startsWith('http')
    if (isLink) {
      // #ifdef H5
      window.open(url, replace ? '_self' : '_blank')
      // #endif

      // #ifndef H5
      if (config.webview) {
        uni.navigateTo({
          url: `${config.webview}?url=${url}`,
        })
      }
      else { throw new Error('请先配置 webview 路由地址') }
      // #endif

      return
    }

    if (tabBar)
      return uni.switchTab({ url })

    if (replace)
      uni.redirectTo({ url })
    else
      uni.navigateTo({ url })
  }

  function replace(params: string | Router) {
    const arg = typeof params === 'string' ? { path: params } : params

    push({
      ...arg,
      replace: true,
    })
  }

  function back(delta = 1) {
    uni.navigateBack({
      delta,
    })
  }

  return {
    push,
    replace,
    back,
  }
}

export const router = useRouter({
  webview: '/pages/webview',
})
