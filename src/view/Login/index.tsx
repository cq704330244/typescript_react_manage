import React from "react"
import Sign from "./Sign"
import "./index.less"

const logo = require("../../assert/logo.png").default
const LoginPage: React.FC<{}> = () => {
  return (
    <div className="mark">
      <div className="container">
        <div className="login-header">
          <div className="login-logo">
            <img src={logo} alt="" />
          </div>
          Ashok
        </div>
        <div className="login-content">
          <Sign />
        </div>
      </div>
    </div>
  )
}
export default LoginPage
