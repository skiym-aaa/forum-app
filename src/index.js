import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'

import './helpers/initializeApp.js'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register({
  onUpdate() {
    window.location.reload()
  }
})

if (module.hot) {
  module.hot.accept()
}
