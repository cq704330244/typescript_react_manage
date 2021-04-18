const menulist = [
  {
    title: "首页",
    icon: "home",
    key: "/home/console",
  },
  {
    title: "基本组件",
    icon: "laptop",
    key: "/home/general",
    subs: [
      { key: "/home/general/picselect", title: "图片选择", icon: "" },
      { key: "/home/general/listscroll", title: "滚动列表", icon: "" },
    ],
  },
  {
    title: "展示组件",
    icon: "desktop",
    key: "/home/display",
    subs: [
      { key: "/home/display/base", title: "轮播图", icon: "" },
      {
        key: "/home/display/icon",
        title: "图标",
        icon: "",
        subs: [{ key: "/home/display/icon/demo", title: "文字图标", icon: "" }],
      },
    ],
  },
  {
    title: "编辑工具",
    icon: "write",
    key: "/home/write",
    subs: [
      { key: "/home/markdown", title: "markdown", icon: "" },
      { key: "/home/word", title: "word", icon: "" },
    ],
  },
  {
    title: "版权",
    key: "/home/scropt",
    icon: "copy",
  },
]
export default menulist
