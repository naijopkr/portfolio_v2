import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import './i18n'

import App from './App'

const app = (
  <Suspense fallback={<div>Loading</div>}>
    <App />
  </Suspense>
)

ReactDOM.render(app, document.getElementById('root'))
