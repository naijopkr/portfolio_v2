import React, { useState, useCallback, useEffect } from 'react'

import { ColorGameWrapper, Circle } from './styles'

const ColorGame: React.FC = () => {
  const [colors, setColors] = useState<string[]>()
  const [index, setIndex] = useState<number>()

  const renderCircles = useCallback(() => {
    if (!colors) {
      return null
    }

    return colors.map(color => <Circle color={color} key={color} />)
  }, [colors])

  const initGame = useCallback(() => {
    const circleColors = new Set<string>()
    while (circleColors.size < 6) {
      const colorComposition = [
        Math.ceil(Math.random() * 255),
        Math.ceil(Math.random() * 255),
        Math.ceil(Math.random() * 255)
      ].join(',')

      circleColors.add(`rgb(${colorComposition})`)
    }

    const correctIndex = Math.ceil(Math.random() * 5)
    setIndex(correctIndex)
    setColors(Array.from(circleColors))
  }, [])

  useEffect(() => {
    initGame()
  }, [initGame])

  return (
    <ColorGameWrapper>
      <div className="title">Color Game</div>
      <div className="desc">
        Guess the correct color for the following rgb code:
      </div>
      <div className="rgb">{colors && index ? colors[index] : null}</div>
      <div className="circles">{renderCircles()}</div>
    </ColorGameWrapper>
  )
}

export default ColorGame
