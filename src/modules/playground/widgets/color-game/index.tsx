import React, { useEffect, useState, useCallback, MouseEvent } from 'react'

import { ColorGameWrapper, Circle } from './styles'

type TCheckAnswer = (evt: MouseEvent<HTMLDivElement>) => void
type TGetAnswer = (options: string[]) => string
type TInitGame = () => string[]

const initGame: TInitGame = () => {
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

const getAnswer: TGetAnswer = (options: string[]) => {
  const index = Math.ceil(Math.random() * (options.length - 1))
  return options[index]
}

const ColorGame: React.FC = () => {
  const [gameStatus, setStatus] = useState<string>()
  const [playing, setPlaying] = useState<boolean>(true)
  const [readyToPlay, setReady] = useState<boolean>(false)

  const [colors, setColors] = useState<string[]>(initGame)
  const [answer, setAnswer] = useState<string>('')
  const [circles, setCircles] = useState<JSX.Element[]>()

  const initCircles = useCallback(() => {
    const checkAnswer: TCheckAnswer = (evt: MouseEvent<HTMLDivElement>) => {
      if (!playing) {
        return
      }

      const { currentTarget: circle } = evt
      const match = answer === circle.style.backgroundColor

      if (match) {
        const circleEls = document.querySelectorAll<HTMLDivElement>('.circle')
        circleEls.forEach(el => {
          Object.assign(el.style, {
            backgroundColor: answer,
            opacity: '1'
          })
        })

        setPlaying(false)
        setStatus('Good job!!')
      } else {
        circle.style.opacity = '0'
        setStatus('Wrong. Try again.')
      }
    }

    return colors.map(color => (
      <Circle
        className="circle"
        style={{ backgroundColor: color }}
        key={color}
        onClick={checkAnswer}
      />
    ))
  }, [answer, colors, playing])

  const restartGame = useCallback(() => {
    setPlaying(true)
    setStatus(undefined)
    setColors(initGame())
    setAnswer(getAnswer(colors))
  }, [colors])

  const renderStatus = useCallback(() => {
    if (!gameStatus) {
      return <div className="game-status" />
    }

    return (
      <div className="game-status">
        <div className="status-text">{gameStatus}</div>
        {playing ? null : (
          <button type="button" onClick={restartGame} className="new-game">
            New Game
          </button>
        )}
      </div>
    )
  }, [gameStatus, playing, restartGame])

  useEffect(() => {
    if (answer && readyToPlay) {
      setCircles(initCircles())
    }
  }, [readyToPlay, answer, initCircles])

  useEffect(() => {
    setAnswer(getAnswer(colors))
    setReady(true)
  }, [colors])

  return (
    <ColorGameWrapper>
      <div className="title">Color Game</div>
      <div className="desc">
        Guess the correct color for the following rgb code:
      </div>
      <div className="rgb">{answer}</div>
      <div className="circles">{circles}</div>
      {renderStatus()}
    </ColorGameWrapper>
  )
}

export default ColorGame
