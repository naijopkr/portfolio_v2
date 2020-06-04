import React from 'react'
import { useTranslation } from 'react-i18next'

import { FormWrapper } from './styles'
import Form from './components/form'
import SocialMedia from '../shared/social-media'

const ContactForm: React.FC = () => {
  const { t } = useTranslation('contactForm')

  return (
    <FormWrapper>
      <div className="form">
        <Form />
      </div>
      <div className="social-media">
        <div className="title">{t('social-medias')}</div>
        <SocialMedia />
      </div>
    </FormWrapper>
  )
}

export default ContactForm
