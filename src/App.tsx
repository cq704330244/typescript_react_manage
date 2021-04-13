import React from "react"

function App(props: any) {
  const { history } = props
  history.push("/login")
  return <div />
}

export default App
