import React from 'react'

import { FormWrapper } from './styles'
import Form from './components/form'
import SocialMedia from '../shared/social-media'

const ContactForm: React.FC = () => {
  return (
    <FormWrapper>
      <div className="form">
        <Form />
      </div>
      <div className="social-media">
        <div className="title">
          Or if you prefer, you can reach me through social medias:
        </div>
        <SocialMedia />
      </div>
    </FormWrapper>
  )
}

export default ContactForm
