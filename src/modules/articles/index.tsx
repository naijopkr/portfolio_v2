import React, { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticlesWrapper } from './styles'
import Article from './components/article'
import { fetchArticles } from '../../data/requests'
import { IArticle } from '../../data/interfaces'

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([])
  const { t } = useTranslation('articles')

  // FETCH ARTICLES
  useEffect(() => {
    fetchArticles()
      .then(data => setArticles(data))
      .catch(() => {
        setArticles([])
      })
  }, [])

  const renderArticles = useCallback(() => {
    return articles.map(article => {
      return <Article key={article.id} article={article} />
    })
  }, [articles])

  return (
    <ArticlesWrapper>
      <div className="articles-warning">
        <div className="articles-warning-title">{t('notice')}</div>
        <div className="articles-warning-body">{t('notice_body')}</div>
      </div>
      <div className="articles-body">{renderArticles()}</div>
    </ArticlesWrapper>
  )
}

export default Articles
