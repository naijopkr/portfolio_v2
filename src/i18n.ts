import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import languageDetector from 'i18next-browser-languagedetector'
import { pathOr } from 'ramda'

import locales from './locales'

const backend = (url: string, _options: any, callback: any) => {
  const path = url.split('.')
  const locale = pathOr(null, path, locales)
  if (locale) {
    callback(locale, { status: '200' })
  } else {
    callback(null, { status: '404' })
  }
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
      parse: (data: any) => data,
      withCredentials: false
    },
    interpolation: {
      escapeValue: false
    },
    debug: false
  })

export default i18n
