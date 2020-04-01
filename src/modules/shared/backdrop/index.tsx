import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { BackdropWrapper } from './styles'

interface IBackdrop {
  show: boolean
  onCancel: () => void
}

const Backdrop: React.FC<IBackdrop> = ({ show, onCancel }) => {
  useEffect(() => {
    const preventScroll: any = window.addEventListener('scroll', evt => {
      evt.preventDefault()
    })

    return () => {
      window.removeEventListener('scroll', preventScroll)
    }
  })

  if (!show) {
    return null
  }

  return <BackdropWrapper onClick={onCancel} />
}

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired
}

export default Backdrop
