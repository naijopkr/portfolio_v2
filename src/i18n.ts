import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import languageDetector from 'i18next-browser-languagedetector'
import { pathOr } from 'ramda'

import locales from './locales'

type TBackend = (
  url: string,
  options: object,
  callback: (
    locale: string | undefined,
    response: {
      status: string
    }
  ) => void
) => void

const backend: TBackend = (url, _options, callback) => {
  const path = url.split('.')
  const locale = pathOr(undefined, path, locales)
  const status = locale ? '200' : '404'

  callback(locale, { status })
}

i18n.languages = ['en', 'pt', 'es']

i18n
  .use(XHR)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    backend: {
      ajax: backend,
      allowMultiLoading: false,
      crossDomain: false,
      loadPath: '{{ns}}.{{lng}}',
      parse: (data: object) => data,
      withCredentials: false
    },
    interpolation: {
      escapeValue: false
    },
    debug: false
  })

export default i18n
