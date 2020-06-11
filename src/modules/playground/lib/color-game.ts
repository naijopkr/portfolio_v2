type TInitGame = () => string[]
type TGetAnswer = (options: string[]) => string

export const initGame: TInitGame = () => {
  const circleColors = new Set<string>()
  while (circleColors.size < 6) {
    const colorComposition = [
      Math.ceil(Math.random() * 255),
      Math.ceil(Math.random() * 255),
      Math.ceil(Math.random() * 255)
    ].join(', ')

    circleColors.add(`rgb(${colorComposition})`)
  }

  return Array.from(circleColors)
}

export const getAnswer: TGetAnswer = (options: string[]) => {
  const index = Math.ceil(Math.random() * (options.length - 1))
  return options[index]
}
