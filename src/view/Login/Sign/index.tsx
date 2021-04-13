import React from "react"
import { Form, Input, Button, message } from "antd"
import { withRouter } from "react-router-dom"
import { Ilogin } from "../../common/interface"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

export default withRouter(props => {
  const { history } = props

  const onFinish = (values: Ilogin) => {
    message.loading({
      content: "biu! 登陆成功!正在前往首页途中...",
      onClose: () => {
        history.push("/home")
      },
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.error("Failed:", errorInfo)
  }

  return (
    <div className="login">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          username: "cq704330244@163.com",
          password: "cq123456",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: "24px" }}
          >
            登录
          </Button>
          <Button>重置</Button>
        </Form.Item>
      </Form>
    </div>
  )
})
