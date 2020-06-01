import React, { useState, useEffect, useCallback } from 'react'
import ReactMD from 'react-markdown'

import { ArticlesWrapper } from './styles'
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
      return (
        <div className="article" key={article.id}>
          <div>{article.title}</div>
          <div>{article.description}</div>
          <div className="article-body-md">
            <ReactMD source={article.body_markdown} />
          </div>
        </div>
      )
    })
  }, [articles])

  return (
    <ArticlesWrapper>
      <div className="articles-title">Articles</div>
      <div className="articles-body">{renderArticles()}</div>
    </ArticlesWrapper>
  )
}

export default Articles
