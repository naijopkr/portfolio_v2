import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ThemeProvider } from './theme'
import Menu from './modules/menu'
import Projects from './modules/projects'
import Welcome from './modules/welcome'
import { StyledApp } from './styles'

const App = () => (
  <ThemeProvider>
    <StyledApp>
      <Menu />
      <div className="content">
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/" component={Welcome} />
        </Switch>
      </div>
    </StyledApp>
  </ThemeProvider>
)

export default App
