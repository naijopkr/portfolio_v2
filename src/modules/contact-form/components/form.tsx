import React, { useMemo, useCallback } from 'react'
import { useFormik, FormikHelpers } from 'formik'
import * as yup from 'yup'

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

const onSubmit: TSubmit = (values, helpers) => {
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
          `Failed to submit. Code ${res.status}: ${res.statusText}`
        )
      }
    })
    .catch(err => helpers.setStatus({ error: err }))
    .finally(() => helpers.setSubmitting(false))
}

export const Form: React.FC = () => {
  const schema = useMemo(() => {
    return yup.object().shape({
      name: yup
        .string()
        .max(256, 'Max of 256 chars')
        .required('Name is required'),
      email: yup
        .string()
        .email('Invalid e-mail')
        .required('E-mail is required'),
      message: yup.string().required('Message is required')
    })
  }, [])

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

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {renderErrors('name')}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
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
        <label htmlFor="message">Message</label>
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
          Submit
        </button>
      </div>
    </form>
  )
}
