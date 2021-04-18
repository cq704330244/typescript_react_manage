import React, { Fragment } from "react"
import Editor from "../../../components/MarkDownEditor"
import "./style.less"

const MarkdonEditor: React.FC<{}> = props => {
  return (
    <Fragment>
      <Editor />
    </Fragment>
  )
}

export default MarkdonEditor
