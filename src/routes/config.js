const routerConfig = [
  {
    id: "/",
    pid: "/",
    name: "",
    path: "/",
    models: () => [],
    component: () => import("../App"),
  },
  {
    id: "aaa",
    pid: "0",
    name: "首页",
    path: "/home",
    models: () => [],
    component: () => import("../view/Home"),
  },
  {
    id: "bbb",
    pid: "0",
    name: "登录",
    path: "/login",
    models: () => [],
    component: () => import("../view/Login"),
  },
]

export default routerConfig
