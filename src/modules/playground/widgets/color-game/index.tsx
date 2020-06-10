import React, { useEffect, useState, useCallback, MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation('color_game')

  const [gameStatus, setStatus] = useState<string>()
  const [playing, setPlaying] = useState<boolean>(true)
  const [readyToPlay, setReady] = useState<boolean>(false)

  const [colors, setColors] = useState<string[]>(initGame)
  const [answer, setAnswer] = useState<string>('')
  const [circles, setCircles] = useState<JSX.Element[]>()

  const checkAnswer: TCheckAnswer = useCallback(
    (evt: MouseEvent<HTMLDivElement>) => {
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
        setStatus('right')
      } else {
        circle.style.opacity = '0'
        setStatus(t('wrong'))
      }
    },
    [t, answer, playing]
  )

  const initCircles = useCallback(() => {
    return colors.map(color => (
      <Circle
        className="circle"
        style={{ backgroundColor: color }}
        key={color}
        onClick={checkAnswer}
      />
    ))
  }, [colors, checkAnswer])

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
        <div className="status-text">
          {gameStatus === 'right' ? t('right') : t('wrong')}
        </div>
        {playing ? null : (
          <button type="button" onClick={restartGame} className="new-game">
            {t('new_game')}
          </button>
        )}
      </div>
    )
  }, [gameStatus, playing, restartGame, t])

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
      <div className="title">{t('title')}</div>
      <div className="desc">{t('desc')}</div>
      <div className="rgb">{answer}</div>
      <div className="circles">{circles}</div>
      {renderStatus()}
    </ColorGameWrapper>
  )
}

export default ColorGame
