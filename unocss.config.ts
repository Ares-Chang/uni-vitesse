import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetWeapp from 'unocss-preset-weapp'
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

export default defineConfig({
  presets: [

    /**
     * 微信小程序预设
     * @see https://github.com/MellowCo/unocss-preset-weapp
     */
    presetWeapp(),
  ],
  /**
   * 自定义快捷语句
   * @see https://github.com/unocss/unocss#shortcuts
   */
  shortcuts: [
    {
      center: 'flex justify-center items-center',
    },
  ],
  transformers: [
    transformerClass(),
    transformerAttributify(), // 开启属性模式(支持小程序)
    transformerDirectives(), // 启用 @apply 功能
    transformerVariantGroup(), // 启用 () 分组功能
  ],
})
