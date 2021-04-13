const routerConfig = [
  {
    path: "/",
    models: () => [],
    component: () => import("../App"),
  },
  {
    path: "/login",
    models: () => [],
    component: () => import("../view/Login"),
  },
  {
    path: "/home",
    models: () => [],
    component: () => import("../view/Home"),
    children: [
      {
        path: "/home/console",
        models: () => [],
        component: () => import("../view/Console"),
      },
    ],
  },
]

export default routerConfig
