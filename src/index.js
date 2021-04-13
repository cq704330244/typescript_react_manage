import "babel-polyfill"
import dva from "dva"
import createLoading from "dva-loading"
const createHistory = require("history").createBrowserHistory
const history = createHistory()
// 1. Initialize
const app = dva({
  ...createLoading(),
  //  history: browserHistory,
  history,
  onError(error) {
    console.error("app onError -- ", error)
  },
})

// 2. Model
app.model(require("./models/app").default)

// 3. Router
app.router(require("./routes").default)

// 4. Plugins
// app.use({});

// 5. Start
app.start("#root")
