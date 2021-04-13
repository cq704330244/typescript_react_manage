import React from "react"
import { connect } from "dva"

import "./index.less"

const HomePage: React.FC<{}> = props => {
  return <div>home</div>
}
const mapStateToProps = (state: any) => state

export default connect(mapStateToProps)(HomePage)
