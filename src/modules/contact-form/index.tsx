import React from 'react'

import { FormWrapper } from './styles'
import { Form } from './components/form'

const ContactForm: React.FC = () => {
  return (
    <FormWrapper>
      <div className="form">
        <Form />
      </div>
    </FormWrapper>
  )
}

export default ContactForm
