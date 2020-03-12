import colors from './colors'

const fontFamily = {
  logo: 'Margarine',
  normal: 'Cabin'
}

const themes = {
  light: {
    fontFamily,
    colors: {
      background: colors.gray_1,
      fill: colors.purple_1,
      title: colors.green_1,
      text: colors.blue_1,
      shadow: colors.black_2,
      border: colors.gray_3
    }
  },
  dark: {
    fontFamily,
    colors: {
      background: colors.gray_2,
      fill: colors.purple_1,
      title: colors.green_1,
      text: colors.purple_2,
      shadow: colors.black_2,
      border: colors.gray_4
    }
  }
}

export default themes
