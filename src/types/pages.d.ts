declare module "virtual:uni-pages" {
    export const pages: {
      path: string;
      name?: string;
      type: "home" | "page";
      style: any;
    }[];
  }

  interface UniAppPagesConfig {
    pages: Array<UniAppPageConfig>;
    globalStyle?: Record<string, unknown>;
    tabBar?: UniAppTabBarConfig;
    // 其他的 pages.json 字段
    // ...
  }
  
  interface UniAppPageConfig {
    path: string;
    name: string;
    style?: UniAppPageStyle;
    // 其他的页面配置字段
    // ...
  }
  
  interface UniAppPageStyle {
    // 页面样式字段
    navigationBarTitleText?: string;
    navigationBarBackgroundColor?: string;
    navigationBarTextStyle?: 'black' | 'white';
    // ...
  }
  
  interface UniAppTabBarConfig {
    color?: string;
    selectedColor?: string;
    backgroundColor?: string;
    list: Array<UniAppTabBarItem>;
  }
  
  interface UniAppTabBarItem {
    pagePath: string;
    text: string;
    iconPath?: string;
    selectedIconPath?: string;
  }
  