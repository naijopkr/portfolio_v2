export interface IProject {
  id: number
  name: string
  published_on: {
    [key: string]: string
  }
  description: string
  language: string
  frameworks?: string[]
  database?: string[]
  updated_at: string
}

export interface IArticle {
  body_markdown: string
  canonical_url: string
  comments_count: number
  cover_image: string
  description: string
  id: number
  page_views_count: number
  path: string
  positive_reactions_count: number
  published: boolean
  published_at: string
  published_timestamp: string
  slug: string
  tag_list: string[]
  title: string
  type_of: string
  url: string
  user: {
    github_username: string
    name: string
    profile_image: string
    profile_image_90: string
    twitter_username: string
    username: string
    website_url: string
  }
}
