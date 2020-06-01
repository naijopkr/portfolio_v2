import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ThemeProvider } from './theme'
import Articles from './modules/articles'
import Menu from './modules/menu'
import Projects from './modules/projects'
import Welcome from './modules/welcome'
import { StyledApp } from './styles'

const App: React.FC = () => (
  <ThemeProvider>
    <StyledApp>
      <Menu />
      <div className="content">
        <Switch>
          <Route path="/articles" component={Articles} />
          <Route path="/projects" component={Projects} />
          <Route path="/" component={Welcome} />
        </Switch>
      </div>
    </StyledApp>
  </ThemeProvider>
)

export default App
