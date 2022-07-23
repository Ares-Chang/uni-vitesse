import presetWxapp from 'unocss-preset-wxapp'
export default {
  presets: [presetWxapp()],
  /**
   * 自定义快捷语句
   * @see https://github.com/unocss/unocss#shortcuts
   */
  shortcuts: [
    {
      center: 'flex justify-center items-center',
    },
  ],
}
