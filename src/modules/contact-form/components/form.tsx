import React, { useMemo, useCallback, useState } from 'react'
import { useFormik, FormikHelpers } from 'formik'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'

import Thanks from './thanks'

interface IContactForm {
  name: string
  email: string
  message: string
}
type FormKey = keyof IContactForm

type TSubmit = (
  values: IContactForm,
  helpers: FormikHelpers<IContactForm>
) => void

const Form: React.FC = () => {
  const { t } = useTranslation('contactForm')
  const [sent, setSent] = useState<boolean>(false)

  const onSubmit: TSubmit = useCallback(
    (values, helpers) => {
      const options: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({ ...values })
      }

      fetch('https://usebasin.com/f/95fd691eb902.json', options)
        .then(res => {
          if (!res.ok) {
            throw new Error(
              t('errors.submit', { code: res.status, status: res.statusText })
            )
          }

          setSent(true)
        })
        .catch(err => helpers.setStatus({ error: err }))
        .finally(() => helpers.setSubmitting(false))
    },
    [t]
  )

  const schema = useMemo(() => {
    return yup.object().shape({
      name: yup
        .string()
        .max(256, t('errors.name.max'))
        .required(t('errors.name.required')),
      email: yup
        .string()
        .email(t('errors.email.invalid'))
        .max(254, t('errors.email.invalid'))
        .required(t('errors.email.required')),
      message: yup
        .string()
        .required(t('errors.message.required'))
        .max(10000, t('errors.message.max'))
    })
  }, [t])

  const formik = useFormik<IContactForm>({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit,
    validationSchema: schema,
    validateOnChange: false,
    validateOnBlur: true
  })

  const renderErrors = useCallback(
    (field: FormKey) => {
      const { errors, touched } = formik
      if (errors[field] && touched[field]) {
        return <div className="form-error">{errors[field]}</div>
      }

      return null
    },
    [formik]
  )

  const renderStatus = useCallback(() => {
    if (formik.status?.error) {
      return <div className="form-error">{formik.status.error.message}</div>
    }

    return null
  }, [formik])

  if (sent) {
    return <Thanks name={formik.values.name} />
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-title">{t('title')}</div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">{t('labels.name')}</label>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {renderErrors('name')}
        </div>

        <div className="form-field">
          <label htmlFor="email">{t('labels.email')}</label>
          <input
            name="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {renderErrors('email')}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message">{t('labels.message')}</label>
        <textarea
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {renderErrors('message')}
      </div>

      <div className="form-submit">
        {renderStatus()}
        <button type="submit" disabled={formik.isSubmitting}>
          {t('labels.submit')}
        </button>
      </div>
    </form>
  )
}

export default Form
