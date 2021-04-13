import React from "react"
import { Router, Route, Switch } from "dva/router"
import config from "./config"
import dynamic from "dva/dynamic"

function Routers({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {config.map(({ path, ...dynamics }, index) => (
          <Route
            key={index}
            path={path}
            exact
            component={dynamic({
              app,
              ...dynamics,
            })}
          />
        ))}
      </Switch>
    </Router>
  )
}

export default Routers
