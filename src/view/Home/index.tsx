import React, { useState, Fragment } from "react"
import Layout from "../common/Layout"
import themesContenxt from "./context"
import { connect } from "dva"

import "./index.less"

const { Provider } = themesContenxt

const HomePage: React.FC<{}> = props => {
  const [themes, setThemes] = useState<string>("dark")
  const totleThemes = () => {
    setThemes(old => {
      return old === "dark" ? "light" : "dark"
    })
  }

  const { children } = props
  return (
    <Fragment>
      <Provider
        value={{
          theme: themes,
          toggleTheme: totleThemes,
        }}
      >
        <Layout child={children} />
      </Provider>
    </Fragment>
  )
}
const mapStateToProps = (state: any) => state

export default connect(mapStateToProps)(HomePage)
