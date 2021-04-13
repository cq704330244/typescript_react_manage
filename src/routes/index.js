import React from "react"
import { Router, Route, Switch } from "dva/router"
import config from "./config"
import dynamic from "dva/dynamic"
function mapRoute(routeArr, app) {
  return routeArr.map(({ path, children, ...dynamics }, index) => {
    if (children) {
      return (
        <Route
          key={index}
          path={path}
          render={props => {
            const Component = dynamic({ app, ...dynamics })
            return <Component {...props}> {mapRoute(children, app)} </Component>
          }}
        />
      )
    }
    return (
      <Route
        key={index}
        path={path}
        exact
        component={dynamic({ app, ...dynamics })}
      />
    )
  })
}
function Routers({ history, app }) {
  return (
    <Router history={history}>
      <Switch>{mapRoute(config, app)}</Switch>
    </Router>
  )
}

export default Routers
