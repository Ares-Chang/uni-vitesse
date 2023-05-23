interface Router {
  path: string
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
      url = `${arg?.path}?${queryParams}`
      replace = arg?.replace || false
    }

    const isLink = url?.startsWith('http')
    if (isLink) {
      // #ifdef H5
      window.open(url)
      // #endif

      // #ifndef H5
      uni.navigateTo({
        url: `/pages/webview?url=${url}`,
      })
      // #endif
      return
    }

    if (replace) {
      uni.redirectTo({
        url: `/pages${url}`,
      })
    }
    else {
      uni.navigateTo({
        url: `/pages${url}`,
      })
    }
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
}

export const router = new UseRouter()
