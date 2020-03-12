import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import themes from './theme'
import Menu from './modules/menu'
import Welcome from './modules/welcome'
import { StyledApp } from './styles'

const App = () => {
  // eslint-disable-next-line
  const [theme, setTheme] = useState(() => {
    const localStorageTheme = localStorage.getItem('theme')

    switch (localStorageTheme) {
      case 'dark':
        return themes.dark
      default:
        localStorage.setItem('theme', 'light')
        return themes.light
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Menu />
        <div className="content">
          <Welcome />
        </div>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
