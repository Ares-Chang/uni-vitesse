/**
 * Router 实例
 */
export declare interface Router {
  /**
   * 跳转到指定页面
   * @param to 路由要跳转的地址
   */
  push: (to: RouterLocationRaw) => void
  /**
   * 跳转新地址并替换当前页面
   * @param to 路由要跳转的地址
   */
  replace: (to: RouterLocationRaw) => void
  /**
   * 返回上一页
   * @param delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页
   */
  back: (delta?: number) => void
}

/**
 * Router 配置
 * @param webview webview 路由地址
 */
export declare interface RouterConfig {
  webview?: string
}

/**
 * Router 跳转参数
 */
export declare type RouterLocationRaw = string | RouteLocationOptions | LocationUniAppParams

/**
 * Router 跳转参数选项
 */
export declare interface RouteLocationOptions {
  /**
   * 目标路由地址
   */
  path: string
  /**
   * 路由参数
   */
  query?: LocationQueryRaw
  /**
   * 是否替换当前页面
   */
  replace?: boolean
  /**
   * 是否跳转到 tabBar 页面
   */
  tabBar?: boolean
}

/**
 * Router Query 参数
 */
export declare type LocationQueryRaw = Record<string, any>
/**
 * 其它参数，可扩展。
 * 参考 uni-app 路由跳转属性
 * @see https://uniapp.dcloud.net.cn/api/router.html
 */
export declare type LocationUniAppParams = Record<string, any>

export function useRouter(config: RouterConfig = {}): Router {
  function setQuery(params: Record<string, any>) {
    return Object.entries(params) // 将对象转换成 [key, value] 数组
      .map(([key, value]) => `${encodeURI(key)}=${encodeURI(JSON.stringify(value))}`) // 将每个数组元素转换成 key=value 字符串，需要对 value 进行 JSON 序列化和 URL 编码
      .join('&') // 将数组用 & 符号连接成字符串
  }

  function push(to: RouterLocationRaw) {
    let url = ''
    let replace = false
    let tabBar = false
    let arg = {}
    if (typeof to === 'string') {
      url = to
    }
    else {
      const { query: _query, path: _path, replace: _replace, tabBar: _tabBar, ..._arg } = to
      const queryParams = setQuery(_query || {})
      url = `${_path}?${queryParams}`
      replace = _replace || false
      tabBar = _tabBar || false
      arg = _arg || {}
    }

    const isLink = url.startsWith('http')
    if (isLink) {
      // #ifdef H5
      window.open(url, replace ? '_self' : '_blank')
      // #endif

      // #ifndef H5
      if (config?.webview) {
        uni.navigateTo({
          url: `${config.webview}?url=${url}`,
          ...arg,
        })
      }
      else { throw new Error('请先配置 webview 路由地址') }
      // #endif

      return
    }

    if (tabBar)
      return uni.switchTab({ url, ...arg })

    if (replace)
      uni.redirectTo({ url, ...arg })
    else
      uni.navigateTo({ url, ...arg })
  }

  function replace(to: RouterLocationRaw) {
    const arg = typeof to === 'string' ? { path: to } : to

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
