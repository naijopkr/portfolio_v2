import React, { createContext, useState, useCallback } from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'
import PropTypes from 'prop-types'

import colors from './colors'

const fonts = {
  logo: 'Margarine',
  normal: 'Cabin'
}

const THEMES = {
  light: {
    fonts,
    colors: {
      background: colors.gray_1,
      fill: colors.purple_1,
      title: colors.green_1,
      text: colors.blue_1,
      shadow: colors.black_2,
      border: colors.gray_3,
      select_border: colors.blue_2,
      select_border_hover: colors.blue_3
    }
  },
  dark: {
    fonts,
    colors: {
      background: colors.gray_2,
      fill: colors.purple_1,
      title: colors.green_1,
      text: colors.purple_2,
      shadow: colors.black_2,
      border: colors.gray_4,
      select_border: colors.purple_3,
      select_border_hover: colors.purple_4
    }
  }
}

let themeName = localStorage.getItem('theme')
if (!themeName || !THEMES[themeName]) {
  themeName = 'light'
  localStorage.setItem('theme', themeName)
}

const INITIAL_THEME = THEMES[themeName]

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    schema: INITIAL_THEME,
    name: themeName
  })
  const handleTheme = useCallback(newTheme => {
    const newThemeProps = THEMES[newTheme]
    if (newThemeProps) {
      localStorage.setItem('theme', newTheme)
      setTheme({
        schema: newThemeProps,
        name: newTheme
      })
    } else {
      throw new Error('Invalid theme name.')
    }
  }, [])

  return (
    <ThemeContext.Provider value={[theme, handleTheme]}>
      <StyledProvider theme={theme.schema}>{children}</StyledProvider>
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { ThemeContext, ThemeProvider, THEMES }
