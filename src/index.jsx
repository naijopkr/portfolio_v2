import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import './i18n'

import App from './App'

const app = (
  <Suspense fallback={<div>Loading</div>}>
    <Router>
      <App />
    </Router>
  </Suspense>
)

ReactDOM.render(app, document.getElementById('root'))
