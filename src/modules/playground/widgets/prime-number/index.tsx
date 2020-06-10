import React, { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { PrimeWrapper } from './styles'

function* getNextPrime(): IterableIterator<number> {
  const primeNumbers = []
  let candidate = 2

  while (true) {
    if (candidate <= 3) {
      primeNumbers.push(candidate)
      yield candidate
    }

    let isPrime = true
    for (let i = 0; i < primeNumbers.length; i++) {
      const divisor = primeNumbers[i]
      if (candidate % divisor === 0) {
        isPrime = false
        break
      }
    }

    if (isPrime) {
      primeNumbers.push(candidate)
      yield candidate
    }

    candidate += 1
  }
}

const PrimeNumber: React.FC = () => {
  const { t } = useTranslation('prime_number')

  const [prime, setPrime] = useState<number>(1)
  const genPrime = useMemo(() => getNextPrime(), [])

  return (
    <PrimeWrapper>
      <div className="title">{t('title')}</div>
      <div className="description">{t('desc')}</div>
      <div className="prime-number">
        <div className="prime-number-output">{prime || null}</div>
        <div className="prime-number-next">
          <button
            type="button"
            className="prime-number-btn"
            onClick={() => setPrime(genPrime.next().value)}
          >
            {t('next-prime')}
          </button>
        </div>
      </div>
    </PrimeWrapper>
  )
}

export default PrimeNumber
