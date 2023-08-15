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
 * Router 跳转参数必填选项 path | url 二选一
 */
export declare type RouterLocationRequiredOnly = 'path' | 'url'

/**
 * Router 跳转参数混合类型
 */
export declare type RouterLocationMixtureRaw< T, K extends keyof T = keyof T > =
  Pick<T, Exclude<keyof T, K>>
  & {
    [P in K]-?: Required<Pick<T, P>> & Partial<Record<Exclude<K, P>, undefined>>
  }[K]

/**
 * Router 跳转参数
 */
export declare type RouterLocationRaw =
  string
  | RouterLocationMixtureRaw<
      RouteLocationOptions & LocationUniAppParams,
      RouterLocationRequiredOnly
    >

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
export declare type LocationQueryRaw = Record<string, string | number | undefined | null>

/**
 * 其它参数，可扩展。
 * 参考 uni-app 路由跳转属性
 * @see https://uniapp.dcloud.net.cn/api/router.html
 */
export declare interface LocationUniAppParams
  extends Partial<UniNamespace.NavigateToOptions>,
  Partial<UniNamespace.RedirectToOptions>,
  Partial<UniNamespace.SwitchTabOptions> {
  success?: (result: UniNamespace.NavigateToSuccessOptions | any) => void
}

export function useRouter(config: RouterConfig = {}): Router {
  function getQueryStringify(params: Record<string, any>) {
    return Object.entries(params) // 将对象转换成 [key, value] 数组
      .map(([key, value]) => encodeURI(
        `${key}=${typeof value === 'object' ? JSON.stringify(value) : value}`,
      )) // 将每个数组元素转换成 key=value 字符串，需要对 value 进行 JSON 序列化和 URL 编码
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
      const { query: _query, path: _path, url: _url, replace: _replace, tabBar: _tabBar, ..._arg } = to
      const queryParams = getQueryStringify(_query || {})
      url = `${_path || _url}?${queryParams}`
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
      return uni.switchTab({ ...arg, url })

    if (replace)
      uni.redirectTo({ ...arg, url })
    else
      uni.navigateTo({ ...arg, url })
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
