import React, { useCallback, useState, ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { CCWrapper } from './styles'

type TCharType = [number, number]
interface ICharTypes {
  [key: string]: TCharType
}
type TGetCharType = (code: number) => [number, number] | undefined
type TEncrypt = (original: string) => string

const CHAR_CODES: ICharTypes = {
  lower: [97, 123],
  upper: [65, 91],
  number: [48, 58]
}

const getCharType: TGetCharType = (code: number) => {
  const codeLimits = Object.values(CHAR_CODES).find(([min, max]: TCharType) => {
    return code >= min && code < max
  })

  return codeLimits
}

const encrypt: TEncrypt = (originalText: string) => {
  const splittedMsg = originalText.split('')
  const encodedMsg = splittedMsg.map(char => {
    const charCode = char.charCodeAt(0)

    const charType = getCharType(charCode)

    if (!charType) {
      return char
    }
    const [min, max] = charType

    const encodedChar = String.fromCharCode(
      ((3 + (charCode - min)) % (max - min + 1)) + min
    )

    return encodedChar
  })

  return encodedMsg.join('')
}

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
