import React, { useState, useEffect, useCallback } from 'react'

import { ArticlesWrapper } from './styles'
import Article from './components/article'
import { fetchArticles } from '../../data/requests'
import { IArticle } from '../../data/interfaces'

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([])

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
        <div className="articles-warning-title">Warning</div>
        <div className="articles-warning-body">
          {`The articles are available only in Portuguese at this time.\n
          I will translate them to English and Spanish in the future.\n`}
        </div>
      </div>
      <div className="articles-body">{renderArticles()}</div>
    </ArticlesWrapper>
  )
}

export default Articles
