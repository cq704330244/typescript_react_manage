import React, { Fragment } from "react"
import { Menu } from "antd"
import { Link, withRouter } from "react-router-dom"
import RIcon from "./RenderIcon"
import classNames from "classnames"
import menuList from "./config.js"
import "./index.less"

const { SubMenu } = Menu

class SideNav extends React.Component {
  state = { activeKey: "" }
  renderMenu(data) {
    return data.map(item => {
      if (item.subs) {
        return (
          <SubMenu
            key={item.key}
            icon={<RIcon icon={item.icon} />}
            title={item.title}
          >
            {item.subs.map(items => {
              if (items.subs) {
                return (
                  <SubMenu key={items.key} title={items.title}>
                    {items.subs.map(itemss => {
                      return (
                        <Menu.Item key={itemss.key}>
                          <Link to={itemss.key}> {itemss.title}</Link>
                        </Menu.Item>
                      )
                    })}
                  </SubMenu>
                )
              }
              return (
                <Menu.Item key={items.key}>
                  <Link to={items.key}> {items.title}</Link>
                </Menu.Item>
              )
            })}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key} icon={<RIcon icon={item.icon} />}>
          <Link to={item.key}> {item.title}</Link>
        </Menu.Item>
      )
    })
  }
  componentDidMount() {
    const { history } = this.props
    const { pathname } = history.location
    this.setState({
      activeKey: pathname,
    })
  }
  render() {
    const { datas, history } = this.props
    const { activeKey } = this.state
    const { pathname } = history.location
    const routerInfo = pathname.split("/")
    const open = `/home/${routerInfo[2]}`
    const wrapClassName = classNames("as-side", {
      themsLight: datas.theme === "light",
    })
    const logoFontColor = classNames("logo_text", {
      blanckColor: datas.theme === "light",
    })
    return (
      <Fragment>
        <div className={wrapClassName}>
          <div className="logo">
            <div className="logo_pic"></div>
            <div className={logoFontColor}>Ashok</div>
          </div>
          <Menu
            selectedKeys={[activeKey]}
            defaultOpenKeys={[open]}
            mode="inline"
            theme={datas.theme}
            onOpenChange={open => {
              console.log(open)
            }}
          >
            {this.renderMenu(menuList)}
          </Menu>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(SideNav)
