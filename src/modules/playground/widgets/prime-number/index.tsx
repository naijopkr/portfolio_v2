import React, { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { PrimeWrapper } from './styles'
import { getNextPrime } from '../../lib/prime-numbers'

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
