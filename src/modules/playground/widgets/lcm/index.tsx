import React, { useState, useCallback, ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { LCMWrapper } from './styles'
import { getLCM } from '../../lib/prime-numbers'

type TSetState = React.Dispatch<React.SetStateAction<number | undefined>>
const ONLY_NUMBERS = /^\d*$/

const handleNumChange = (setState: TSetState) => (
  e: ChangeEvent<HTMLInputElement>
) => {
  const { value } = e.target

  if (!ONLY_NUMBERS.test(value)) {
    return
  }
  const newValue = value ? Number(value) : undefined
  setState(newValue)
}

const LCM: React.FC = () => {
  const { t } = useTranslation('lcm')

  const [num1, setNum1] = useState<number>()
  const [num2, setNum2] = useState<number>()
  const [output, setOutput] = useState<number>()

  const calculateLCM = useCallback(
    (n1: number | undefined, n2: number | undefined) => {
      if (!n1 || !n2) {
        return
      }

      setOutput(getLCM(n1, n2))
    },
    []
  )

  const handleNum1 = useCallback(handleNumChange(setNum1), [])
  const handleNum2 = useCallback(handleNumChange(setNum2), [])

  return (
    <LCMWrapper>
      <div className="title">{t('title')}</div>
      <div className="desc">{t('desc')}</div>
      <div className="lcm">
        <div className="inputs">
          <div className="inputs-num">
            <label htmlFor="num1">{t('num1')}</label>
            <input
              name="num1"
              type="text"
              onChange={handleNum1}
              value={num1 || ''}
            />
          </div>
          <div className="inputs-num">
            <label htmlFor="num2">{t('num2')}</label>
            <input
              name="num2"
              type="text"
              onChange={handleNum2}
              value={num2 || ''}
            />
          </div>
          <div className="calculate">
            <button
              type="button"
              className="calculate-btn"
              onClick={() => calculateLCM(num1, num2)}
              disabled={!num1 || !num2}
            >
              {t('calculate')}
            </button>
          </div>
        </div>
        <div className="output">
          <div className="output-desc">{t('output-desc')}</div>
          <div className="output-value">{output}</div>
        </div>
      </div>
    </LCMWrapper>
  )
}

export default LCM
