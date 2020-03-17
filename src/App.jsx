import React from 'react'

import { ThemeProvider } from './theme'
import Menu from './modules/menu'
import Welcome from './modules/welcome'
import { StyledApp } from './styles'

const App = () => (
  <ThemeProvider>
    <StyledApp>
      <Menu />
      <div className="content">
        <Welcome />
      </div>
    </StyledApp>
  </ThemeProvider>
)

export default App
