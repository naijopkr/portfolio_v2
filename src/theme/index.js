import colors from './colors'

const fonts = {
  logo: 'Margarine',
  normal: 'Cabin'
}

const themes = {
  light: {
    fonts,
    colors: {
      background: colors.gray_1,
      fill: colors.purple_1,
      title: colors.green_1,
      text: colors.blue_1,
      shadow: colors.black_2,
      border: colors.gray_3,
      select_border: colors.blue_2,
      select_border_hover: colors.blue_3
    }
  },
  dark: {
    fonts,
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
