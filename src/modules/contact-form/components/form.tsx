import React from 'react'
import { useFormik } from 'formik'

interface IContactForm {
  name: string
  email: string
  message: string
}

type TSubmit = (values: IContactForm) => void
const onSubmit: TSubmit = values => {
  console.log({ values }) //eslint-disable-line
}

export const Form: React.FC = () => {
  const formik = useFormik<IContactForm>({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
        />
      </div>
      <div className="form-submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
