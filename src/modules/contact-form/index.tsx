import React from 'react'
import { useTranslation } from 'react-i18next'

import { FormWrapper } from './styles'
import { Form } from './components/form'

const ContactForm: React.FC = () => {
  const { t } = useTranslation('contactForm')

  return (
    <FormWrapper>
      <div className="form-title">{t('title')}</div>
      <div className="form">
        <Form />
      </div>
    </FormWrapper>
  )
}

export default ContactForm
