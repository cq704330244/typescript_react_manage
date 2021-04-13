import React from "react"
import { Button, Row, Col } from "antd"
import { Link } from "react-router-dom"
import "./style.less"

const errGif = require("../../assets/401.gif").default

const NotFound: React.FC<{ [key: string]: any }> = props => {
  const { history } = props
  const back = () => {
    history.push("/home")
  }
  return (
    <div className="errPage-container">
      <Button className="pan-back-btn" onClick={back}>
        返回
      </Button>
      <Row>
        <Col span={12}>
          <h1 className="text-jumbo text-ginormous">Oops!</h1>
          <h2>你没有权限去该页面</h2>
          <h6>如有需求请联系作者</h6>
          <ul className="list-unstyled">
            <li>或者你可以去:</li>
            <li className="link-type">
              <Link to="/home/console">回首页</Link>
            </li>
            <li className="link-type">
              <a href="https://github.com/cq704330244">随便看看</a>
            </li>
          </ul>
        </Col>
        <Col span={12}>
          <img
            src={errGif}
            width="313"
            height="428"
            alt="Girl has dropped her ice cream."
          />
        </Col>
      </Row>
    </div>
  )
}

export default NotFound
