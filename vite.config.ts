import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path' // 如果编辑器提示 path 模块找不到，可以安装一下 @types/node -> npm i @types/node -D
import Unocss from 'unocss/vite'
import transformWxClass from 'unplugin-transform-wx-class/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    /**
     * unocss
     * @see https://github.com/antfu/unocss
     * see unocss.config.ts for config
     */
    Unocss(),

    /**
     * unocss 适配微信小程序插件
     * @see https://github.com/MellowCo/unplugin-transform-we-class
     */
    transformWxClass(),

    /**
     * unplugin-auto-import 按需 import
     * @see https://github.com/antfu/unplugin-auto-import
     */
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        {
          '@dcloudio/uni-app': [
            'onLaunch',
            'onShow',
            'onHide',
            'onLoad',
            'onPullDownRefresh',
            'onReachBottom',
          ],
        },
      ],
      dts: true,
      dirs: ['./src/utils'],
      vueTemplate: true,
      eslintrc: {
        // 每次更改配置后打开后再关闭
        enabled: false, // 是否生成 .eslintrc-auto-import.json 文件
      },
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
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
})
