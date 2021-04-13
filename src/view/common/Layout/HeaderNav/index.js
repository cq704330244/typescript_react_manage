import React, { Component } from "react"
import { Layout, Avatar } from "antd"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HeartOutlined,
  HeartFilled,
  SmileOutlined,
} from "@ant-design/icons"
import user from "../../constants"

import "./index.less"
const { Header } = Layout

export default class HeaderNav extends Component {
  state = {
    collapsed: false,
    userInfo: {},
  }

  toggle = () => {
    const { iconClick } = this.props
    this.setState({
      collapsed: !this.state.collapsed,
    })
    iconClick(!this.state.collapsed)
  }
  componentDidMount() {
    const free = sessionStorage.getItem("free")
    if (free) {
      this.setState(
        {
          userInfo: user,
        },
        () => {
          console.log(this.state.userInfo)
        }
      )
    }
  }
  render() {
    const {
      datas: { toggleTheme, theme },
    } = this.props
    const {
      userInfo: { avart },
    } = this.state
    return (
      <div className="as_header">
        <Header className="as_header_bg" style={{ padding: 0 }}>
          {React.createElement(
            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "as_trigger",
              onClick: this.toggle,
            }
          )}
          {theme === "light" && (
            <HeartOutlined
              onClick={toggleTheme}
              style={{
                color: "#f00",
              }}
            />
          )}
          {theme === "dark" && (
            <HeartFilled
              onClick={toggleTheme}
              style={{
                color: "#f00",
              }}
            />
          )}
          <div
            className="as-avart"
            onClick={() => {
              console.log(1111)
            }}
          >
            <Avatar size="large" icon={<SmileOutlined />} src={avart} />
          </div>
        </Header>
      </div>
    )
  }
}
