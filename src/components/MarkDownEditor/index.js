import React from "react"
import Editor from "@toast-ui/editor"
import "codemirror/lib/codemirror.css"
import "@toast-ui/editor/dist/toastui-editor.css"
import { init } from "./const"
export default class Editors extends React.Component {
  rootEl = React.createRef()
  editorInst = null
  getRootElement() {
    return this.rootEl.current
  }
  getInstance() {
    return this.editorInst
  }
  bindEventHandlers(props) {
    Object.keys(this.props)
      .filter(key => /^on[A-Z][a-zA-Z]+/.test(key))
      .forEach(key => {
        const eventName = key[2].toLowerCase() + key.slice(3)
        this.editorInst.off(eventName)
        this.editorInst.on(eventName, props[key])
      })
  }
  save = () => {
    console.log(this.editorInst.getHtml())
  }
  componentDidMount() {
    this.editorInst = new Editor({
      el: this.rootEl.current,
      initialValue: init,
      height: "600px",
      ...this.props,
    })
    this.bindEventHandlers(this.props)
  }
  shouldComponentUpdate(nextProps) {
    const instance = this.getInstance()
    const { height, previewStyle } = nextProps
    if (this.props.height !== height) {
      instance.height(height)
    }
    if (this.props.previewStyle !== previewStyle) {
      instance.changePreviewStyle(previewStyle)
    }
    this.bindEventHandlers(nextProps, this.props)
    return false
  }
  render() {
    return (
      <div>
        <div ref={this.rootEl} />
      </div>
    )
  }
}
