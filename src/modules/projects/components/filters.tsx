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
  selectFilters: (type: keyof IFilters, filter: string) => void
}

const Filters: React.FC<IFiltersProps> = ({
  filters,
  selectFilters,
  selectedFilters
}) => {
  const { t } = useTranslation('filters')

  const renderTags = useCallback(() => {
    // if (selectedFilters.languages.size) {
    //   console.log(selectedFilters)
    // }

    const { languages, frameworks, database } = filters

    const langFilters = Array.from(languages).map(language => (
      <Tag
        onClick={() => selectFilters('languages', language)}
        label={language}
        key={language}
        active={selectedFilters.languages.has(language)}
      />
    ))

    const frameworksFilters = Array.from(frameworks).map(framework => (
      <Tag
        label={framework}
        key={framework}
        onClick={() => selectFilters('frameworks', framework)}
        active={selectedFilters.frameworks.has(framework)}
      />
    ))

    const databaseFilters = Array.from(database).map(db => (
      <Tag
        onClick={() => selectFilters('database', db)}
        active={selectedFilters.database.has(db)}
        label={db}
        key={db}
      />
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
  }, [filters, t, selectFilters, selectedFilters])

  return <FiltersWrapper>{renderTags()}</FiltersWrapper>
}

export default Filters
