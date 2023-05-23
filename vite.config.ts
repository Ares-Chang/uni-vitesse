import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'

// @ts-expect-error failed to resolve types
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    UniPages(),
    UniLayouts(),

    /**
     * unocss
     * @see https://github.com/antfu/unocss
     * see unocss.config.ts for config
    */
    Unocss(),

    /**
     * unplugin-auto-import 按需 import
     * @see https://github.com/antfu/unplugin-auto-import
     */
    AutoImport({
      imports: [
        'vue',
        {
          '@dcloudio/uni-app': [
            'onLaunch',
            'onShow',
            'onHide',
            'onLoad',
            'onPullDownRefresh',
            'onReachBottom',
            // ... 按需添加 {@link https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle}
          ],
        },
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    /**
     * unplugin-vue-components 按需引入组件
     * 注意：需注册至 uni 之前，否则不会生效
     * @see https://github.com/antfu/vite-plugin-components
     */
    Components({
      dts: true,
    }),

    uni(),

    /**
     * Reactivity Transform
     * @see https://vue-macros.sxzz.moe/zh-CN/features/reactivity-transform.html
     */
    ReactivityTransform(),
  ],
})
