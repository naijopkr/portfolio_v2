import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled, { ThemeProvider } from 'styled-components'

import themes from './theme'

const WelcomeWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  padding: 32px;

  .welcome {
    width: 50%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px 5px ${({ theme }) => theme.colors.quotes};
    font-size: 24px;
    color: ${({ theme }) => theme.colors.title};
  }
`

const App = () => {
  const { t } = useTranslation('global')
  const [theme, setTheme] = useState(themes.light)

  useEffect(() => {
    setTimeout(() => setTheme(themes.dark), 5000)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <WelcomeWrapper>
        <div className="welcome">{t('welcome')}</div>
      </WelcomeWrapper>
    </ThemeProvider>
  )
}

export default App
