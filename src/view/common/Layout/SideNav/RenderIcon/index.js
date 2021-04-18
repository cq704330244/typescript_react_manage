import React, { Fragment } from "react"
import {
  AppstoreAddOutlined,
  CrownOutlined,
  ExpandOutlined,
  InstagramOutlined,
  FormOutlined,
} from "@ant-design/icons"
const Rendericon = icon => {
  if (icon === "home") {
    return <AppstoreAddOutlined />
  }
  if (icon === "copy") {
    return <CrownOutlined />
  }
  if (icon === "laptop") {
    return <ExpandOutlined />
  }
  if (icon === "desktop") {
    return <InstagramOutlined />
  }
  if (icon === "write") {
    return <FormOutlined />
  }
}

function RIcon(props) {
  const { icon } = props
  return <Fragment>{Rendericon(icon)}</Fragment>
}

export default RIcon
