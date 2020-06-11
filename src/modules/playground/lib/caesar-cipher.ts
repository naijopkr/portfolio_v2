type TCharType = [number, number]
interface ICharTypes {
  [key: string]: TCharType
}
type TGetCharType = (code: number) => [number, number] | undefined
type TEncrypt = (original: string) => string

export const CHAR_CODES: ICharTypes = {
  lower: [97, 123],
  upper: [65, 91],
  number: [48, 58]
}

export const getCharType: TGetCharType = (code: number) => {
  const codeLimits = Object.values(CHAR_CODES).find(([min, max]: TCharType) => {
    return code >= min && code < max
  })

  return codeLimits
}

export const encrypt: TEncrypt = (originalText: string) => {
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
