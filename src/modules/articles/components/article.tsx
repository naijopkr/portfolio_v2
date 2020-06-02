import React, { useState, useCallback } from 'react'
import ReactMD from 'react-markdown'
import { useTranslation } from 'react-i18next'

import { IArticle } from '../../../data/interfaces'

interface IArticleProps {
  article: IArticle
}

const Article: React.FC<IArticleProps> = ({ article }) => {
  const [expand, setExpand] = useState<boolean>(false)
  const { t } = useTranslation('articles')

  const toggleExpand = useCallback((nextState: boolean) => {
    setExpand(nextState)
  }, [])

  const renderBody = useCallback(() => {
    if (expand) {
      return (
        <div className="article-body-md">
          <ReactMD source={article.body_markdown} />
        </div>
      )
    }

    return null
  }, [expand, article])

  return (
    <div className="article" key={article.id}>
      <h1 className="article-title">{article.title}</h1>
      <h3 className="article-description">{article.description}</h3>
      <div className="article-options">
        <button
          type="button"
          className="article-option button"
          onClick={() => toggleExpand(!expand)}
        >
          {expand ? t('close') : t('read')}
        </button>
        <div className="article-option">
          <a
            href={article.canonical_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('read_devto')}
          </a>
        </div>
      </div>
      {renderBody()}
    </div>
  )
}

export default Article
