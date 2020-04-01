import { MenuItem } from '@material-ui/core'
import React, { useCallback, useContext } from 'react'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { ConfigWrapper, SelectWrapper as Select } from './styles'
import { ThemeContext } from '../../../../theme'

interface IConfigDropdown {
  show: boolean
}

interface INameValue {
  name: string
  value: string
}

const ConfigDropdown: React.FC<IConfigDropdown> = ({ show }) => {
  const { t } = useTranslation('config')
  const [theme, setTheme] = useContext(ThemeContext)

  const handleLanguage = useCallback(evt => {
    const lng = evt.target.value
    i18n.changeLanguage(lng)
  }, [])

  const handleTheme = useCallback(
    evt => {
      const newTheme = evt.target.value
      setTheme(newTheme)
    },
    [setTheme]
  )

  const renderLanguages = useCallback(() => {
    const languages: INameValue[] = t('languages', { returnObjects: true })
    return languages.map(({ name, value }) => (
      <MenuItem key={value} value={value}>
        {name}
      </MenuItem>
    ))
  }, [t])

  const renderThemes = useCallback(() => {
    const themes: INameValue[] = t('themes', { returnObjects: true })
    return themes.map(({ name, value }) => (
      <MenuItem key={value} value={value}>
        {name}
      </MenuItem>
    ))
  }, [t])

  if (!show) {
    return null
  }

  return (
    <>
      <ConfigWrapper>
        <div className="language" id="select">
          <label htmlFor="language">{t('language')}</label>
          <Select
            name="language"
            onChange={handleLanguage}
            defaultValue={i18n.language}
          >
            {renderLanguages()}
          </Select>
        </div>
        <div className="theme">
          <label htmlFor="theme">{t('theme')}</label>
          <Select name="theme" onChange={handleTheme} defaultValue={theme.name}>
            {renderThemes()}
          </Select>
        </div>
      </ConfigWrapper>
    </>
  )
}

ConfigDropdown.propTypes = {
  show: PropTypes.bool.isRequired
}

export default ConfigDropdown
