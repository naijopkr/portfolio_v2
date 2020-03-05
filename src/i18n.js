/* eslint import/no-dynamic-require: 0 */
/* eslint global-require: 0 */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import languageDetector from 'i18next-browser-languagedetector'

const backend = async (url, _options, callback) => {
  require(`./locales/${url}`)
    .then(locale => {
      callback(locale, { status: '200' })
    })
    .catch(() => {
      callback(null, { status: '404' })
    })
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
      loadPath: '{{ns}}/{{lng}}.json',
      parse: data => data,
      withCredentials: false
    },
    interpolation: {
      escapeValue: false
    },
    debug: true
  })

export default i18n
