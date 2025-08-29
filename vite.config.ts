/// <reference types="vitest" />

import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Uni from '@uni-helper/plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import VueDevTools from 'vite-plugin-vue-devtools'
import UniPolyfill from 'vite-plugin-uni-polyfill'
import { uniuseAutoImports } from '@uni-helper/uni-use'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(
  {
    resolve: {
      alias: {
        '~/': `${resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      /**
       * vite-plugin-uni-pages
       * @see https://github.com/uni-helper/vite-plugin-uni-pages
       */
      UniPages({
        subPackages: [
          'src/pages-sub',
        ],
      }),

      /**
       * vite-plugin-uni-layouts
       * @see https://github.com/uni-helper/vite-plugin-uni-layouts
       */
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
          'uni-app',
          '@vueuse/core',
          uniuseAutoImports(),
          {
            pinia: ['storeToRefs'],
          },
          /**
           * uni-use-router 更加贴全 vue-router 的跳转方式
           * @see https://github.com/Ares-Chang/uni-use-router
           */
          {
            'uni-use-router': ['useRoute', 'useRouter'],
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
        dts: 'src/components.d.ts',
      }),

      /**
       * vite-plugin-vue-devtools 增强 Vue 开发者体验
       * @see https://github.com/webfansplz/vite-plugin-vue-devtools
       */
      VueDevTools(),

      /**
       * uni to esm
       * @see https://uni-helper.js.org/plugin-uni
       */
      Uni(),

      /**
       * 暂时修复 uni 底层依赖不支持 VueUse v10 以上问题
       * @see https://github.com/dcloudio/uni-app/issues/4604
       */
      UniPolyfill(),
    ],

    /**
     * Vitest
     * @see https://github.com/vitest-dev/vitest
     */
    test: {
      environment: 'jsdom',
    },
  },
)
