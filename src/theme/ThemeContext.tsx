import React, { createContext, useState, useCallback } from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'

import colors from './colors'

interface ITheme {
  fonts: {
    logo: string
    normal: string
  }
  colors: {
    background: string
    fill: string
    title: string
    text: string
    shadow: string
    shadow_project: string
    border: string
    select_border: string
    select_border_hover: string
  }
}

interface IThemes {
  [key: string]: ITheme
}

interface IThemeContext {
  schema: ITheme
  name: string
}

type THandleTheme = (newTheme: string) => void

type TThemeContext = [IThemeContext, THandleTheme]

const fonts = {
  logo: 'Margarine',
  normal: 'Cabin',
  monospace: 'Monospace'
}

const THEMES: IThemes = {
  light: {
    fonts,
    colors: {
      background: colors.gray_1,
      fill: colors.purple_1,
      title: colors.green_1,
      text: colors.blue_1,
      shadow: colors.black_2,
      shadow_project: colors.purple_5,
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
      shadow_project: colors.purple_5,
      border: colors.gray_4,
      select_border: colors.purple_3,
      select_border_hover: colors.purple_4
    }
  },
  highContrast: {
    fonts,
    colors: {
      background: colors.black_1,
      fill: colors.purple_1,
      title: colors.green_4,
      text: colors.green_4,
      shadow: colors.gray_1,
      shadow_project: colors.purple_5,
      border: colors.gray_1,
      select_border: colors.green_4,
      select_border_hover: colors.green_4
    }
  }
}

let themeName = localStorage.getItem('theme') || ''
if (!themeName || !THEMES[themeName]) {
  themeName = 'light'
  localStorage.setItem('theme', themeName)
}

const INITIAL_SCHEMA: ITheme = THEMES[themeName]
const INITIAL_THEME: IThemeContext = {
  schema: INITIAL_SCHEMA,
  name: themeName
}

const ThemeContext = createContext<TThemeContext>([INITIAL_THEME, () => false])

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<IThemeContext>(INITIAL_THEME)

  const handleTheme: THandleTheme = useCallback(newTheme => {
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

export { ThemeContext, ThemeProvider, THEMES }
