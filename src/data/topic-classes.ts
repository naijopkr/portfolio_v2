interface IClasses {
  frameworks: string[]
  database: string[]
  topics: string[]
}

type TClassify = (t: string) => keyof IClasses
type TMapTopics = (c: string[]) => IClasses

const FRAMEWORKS = [
  'react',
  'flask',
  'django',
  'tensorflow',
  'keras',
  'spark',
  'express',
  'electron',
  'dotnet-core'
]

const DATABASES = ['mongodb']

const classifyTopic: TClassify = (topic: string) => {
  if (FRAMEWORKS.includes(topic.toLowerCase())) {
    return 'frameworks'
  }

  if (DATABASES.includes(topic.toLowerCase())) {
    return 'database'
  }

  return 'topics'
}

export const mapTopics: TMapTopics = (candidates: string[]) => {
  const classified: IClasses = {
    frameworks: [],
    database: [],
    topics: []
  }

  candidates.forEach(candidate => {
    const assignedTopic = classifyTopic(candidate)
    classified[assignedTopic].push(candidate)
  })

  return classified
}
