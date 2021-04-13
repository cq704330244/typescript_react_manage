import React from "react"
import { Layout, message } from "antd"
import SideNav from "./SideNav"
import HeaderNav from "./HeaderNav"
import themsContentx from "../../Home/context"
import { ILayout } from "../interface"
import "./index.less"

const { Sider, Content } = Layout
const { Consumer } = themsContentx

class LayoutNav extends React.Component<ILayout> {
  state = {
    collapsed: false,
  }

  headerClick = (value: string) => {
    this.setState({
      collapsed: value,
    })
  }
  componentDidMount() {
    const free = sessionStorage.getItem("free")
    if (free) {
      message.success("biu! 欢迎小主的到来！")
    }
  }
  render() {
    return (
      <Layout>
        <Consumer>
          {data => {
            return (
              <React.Fragment>
                <Sider
                  trigger={null}
                  theme={data.theme === "light" ? "light" : "dark"}
                  collapsible
                  collapsed={this.state.collapsed}
                >
                  <SideNav datas={data} />
                </Sider>
                <Layout className="as_layout">
                  <HeaderNav
                    iconClick={(value: string) => {
                      this.headerClick(value)
                    }}
                    datas={data}
                  />
                  <Content className="as_layout_main">
                    {this.props.child}
                  </Content>
                </Layout>
              </React.Fragment>
            )
          }}
        </Consumer>
      </Layout>
    )
  }
}

export default LayoutNav
