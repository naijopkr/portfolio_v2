import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { FiltersWrapper } from '../styles'
import Tag from './tag'

export interface IFilters {
  languages: Set<string>
  frameworks: Set<string>
  database: Set<string>
}

interface IFiltersProps {
  filters: IFilters
  selectedFilters: IFilters
}

const Filters: React.FC<IFiltersProps> = ({
  filters
  // selectedFilters
}) => {
  const { t } = useTranslation('filters')

  const renderTags = useCallback(() => {
    // if (selectedFilters.languages.size) {
    //   console.log(selectedFilters)
    // }

    const { languages, frameworks, database } = filters

    const langFilters = Array.from(languages).map(language => (
      <Tag label={language} key={language} />
    ))

    const frameworksFilters = Array.from(frameworks).map(framework => {
      const fwName = framework.split('/')[1]
      return <Tag label={fwName} key={framework} />
    })

    const databaseFilters = Array.from(database).map(db => (
      <Tag label={db} key={db} />
    ))

    return (
      <>
        <div className="filters-title">{t('filters')}</div>
        <div className="filters-labels">{t('languages')}</div>
        <div className="filters-tags">{langFilters}</div>
        <div className="filters-labels">{t('frameworks')}</div>
        <div className="filters-tags">{frameworksFilters}</div>
        <div className="filters-labels">{t('databases')}</div>
        <div className="filters-tags">{databaseFilters}</div>
      </>
    )
  }, [filters, t])

  return <FiltersWrapper>{renderTags()}</FiltersWrapper>
}

export default Filters
