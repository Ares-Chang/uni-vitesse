module.exports = {
  arrowParens: 'always', // 当箭头函数仅有一个参数时加上括号
  useTabs: false, // 使用制表符（tab）缩进
  tabWidth: 2, // 每个制表符占用的空格数
  printWidth: 80, // 指定每行代码的最佳长度， 如果超出长度则换行。
  singleQuote: true, // 如果为 true，将使用单引号而不是双引号
  /**
   * 尽可能控制尾随逗号的输出。
   * 有效选项：
   *  '无' - 无尾随逗号
   *  'es5' - 在ES5中有效的尾随逗号（对象，数组等）
   *  'all' - 尾随逗号 尽可能（函数参数）
   */
  trailingComma: 'es5',
  semi: false, // 是否在每行末尾添加分号
  quoteProps: 'as-needed', // 仅在必需时为对象的 key 添加引号
  bracketSpacing: true, // 控制对象字面量的空格输出
  endOfLine: 'auto', // 指定 prettier 的换行符
  /**
   * 指定HTML文件的全局空白区域敏感度。
   * 有效选项：
   *  'css' - 尊重CSS显示属性的默认值。
   *  'strict' - 空格被认为是敏感的。
   *  'ignore' - 空格被认为是不敏感的。
   */
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false, // 不对 vue 中的 script 及 style 标签缩进
  jsxSingleQuote: true, // 在JSX中使用单引号而不是双引号
  jsxBracketSameLine: true, // 如果为 true，则将多行jsx元素的 `>` 放在最后一行的末尾，而不是单独放在下一行
  // 指定解析器
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
  ],
}
