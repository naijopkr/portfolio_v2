import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import themes from './theme'
import Menu from './modules/menu'
import { StyledApp } from './styles'

const App = () => {
  const [theme, setTheme] = useState(themes.light)

  useEffect(() => {
    setTimeout(() => setTheme(themes.dark), 5000)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Menu />
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
