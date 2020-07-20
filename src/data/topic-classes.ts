interface IClasses {
  frameworks: string[]
  topics: string[]
}

type TClassify = (t: string) => keyof IClasses
type TMapTopics = (c: string[]) => IClasses

const FRAMEWORKS = ['react', 'flask']

const classifyTopic: TClassify = (topic: string) => {
  if (FRAMEWORKS.includes(topic.toLowerCase())) {
    return 'frameworks'
  }

  return 'topics'
}

export const mapTopics: TMapTopics = (candidates: string[]) => {
  const classified: IClasses = {
    frameworks: [],
    topics: []
  }

  candidates.forEach(candidate => {
    const assignedTopic = classifyTopic(candidate)
    classified[assignedTopic].push(candidate)
  })

  return classified
}
