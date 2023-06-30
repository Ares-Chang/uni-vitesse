/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-06-28 09:44:47
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import pagesJson from '/src/pages.json'

const { pages, tabBar } = pagesJson as UniAppPagesConfig

/**
 * 路由跳转
 * @param {string} path 路由地址 pages 目录下可省略 pases，子包目录下需要以 ~ 开头，如：~/pages-sub/index
 * @param {Record<string, any>} query 路由参数
 * @param {boolean} replace 是否替换当前页面
 */
interface Router {
  path?: string
  name?: string
  query?: Record<string, any>
  replace?: boolean
}

class UseRouter {
  private setQuery(params: Record<string, any>) {
    return Object.entries(params) // 将对象转换成 [key, value] 数组
      .map(([key, value]) => `${encodeURI(key)}=${encodeURI(JSON.stringify(value))}`) // 将每个数组元素转换成 key=value 字符串，需要对 value 进行 JSON 序列化和 URL 编码
      .join('&') // 将数组用 & 符号连接成字符串
  }

  push(arg?: string | Router) {
    let url = ''
    let replace = false
    if (typeof arg === 'string') {
      url = arg
    }
    else {
      const queryParams = this.setQuery(arg?.query || {})

      if (arg?.path) {
        url = `${arg?.path}?${queryParams}`
      }
      else if (arg && 'name' in arg) {
        const page = pages.find(e => (e as any)?.name === arg.name)
        url = `${page?.path}?${queryParams}`
      }
      replace = arg?.replace || false
    }

    const isLink = url.startsWith('http')
    if (isLink) {
      // #ifdef H5
      window.open(url, replace ? '_self' : '_blank')
      // #endif

      // #ifndef H5
      uni.navigateTo({
        url: `/pages/webview?url=${url}`,
      })
      // #endif

      return
    }

    url = getPath(url)

    if (replace)
      uni.redirectTo({ url })
    else
      tabBar?.list.find(e => url.includes(e.pagePath)) ? uni.switchTab({ url }) : uni.navigateTo({ url })
  }

  replace(params?: string | Router) {
    const arg = typeof params === 'string' ? { path: params } : params

    this.push({
      ...arg,
      replace: true,
    })
  }

  back(delta = 1) {
    uni.navigateBack({
      delta,
    })
  }

  reLaunch(options: UniNamespace.ReLaunchOptions) {
    uni.reLaunch(options)
  }
}

function getPath(url: string) {
  // 是否是子包
  const isSub = url.startsWith('~')
  if (isSub)
    return url.replace('~', '')

  // 输入目录是否包含 pages
  const hasPages = url.startsWith('pages')
  if (hasPages)
    return `/${url}`
  else
    return `/pages${url}`
}

export const router = new UseRouter()
