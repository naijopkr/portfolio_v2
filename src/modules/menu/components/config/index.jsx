import { Switch, MenuItem } from '@material-ui/core'
import React, { useCallback } from 'react'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { ConfigWrapper, SelectWrapper as Select } from './styles'

const ConfigDropdown = ({ show }) => {
  const { t } = useTranslation('config')

  const handleLanguage = useCallback(evt => {
    const lng = evt.target.value
    i18n.changeLanguage(lng)
  }, [])

  const renderLanguages = useCallback(() => {
    const languages = t('languages', { returnObjects: true })
    return languages.map(({ name, value }) => (
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
          <Switch>Dark theme</Switch>
        </div>
      </ConfigWrapper>
    </>
  )
}

ConfigDropdown.propTypes = {
  show: PropTypes.bool.isRequired
}

export default ConfigDropdown
