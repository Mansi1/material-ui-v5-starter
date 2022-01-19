import "custom-event-polyfill"
import "react-app-polyfill/ie9"
import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"

import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { isNotProduction, printReactEnv } from "@milkscout/react"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
)

isNotProduction(printReactEnv)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
