import React, { useCallback, useState, ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { CCWrapper } from './styles'
import { encrypt } from '../../lib/caesar-cipher'

const CaesarCipher: React.FC = () => {
  const { t } = useTranslation('caesar_cipher')

  const [original, setOriginal] = useState('')
  const [encrypted, setEncrypted] = useState('')

  const handleChange = useCallback((evt: ChangeEvent<HTMLTextAreaElement>) => {
    setOriginal(evt.target.value)
    setEncrypted(encrypt(evt.target.value))
  }, [])

  return (
    <CCWrapper>
      <div className="title">{t('title')}</div>
      <div className="description">{t('desc')}</div>
      <div className="cipher">
        <div className="cipher-input">
          <label htmlFor="text-input">{t('text_input')}</label>
          <textarea
            name="text-input"
            value={original}
            onChange={handleChange}
            rows={7}
          />
        </div>
        <div className="output-label">{t('encoded_output')}</div>
        <div className="cipher-output">{encrypted}</div>
      </div>
    </CCWrapper>
  )
}

export default CaesarCipher
