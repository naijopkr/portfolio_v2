import React, { useEffect } from 'react'

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

export default Backdrop
