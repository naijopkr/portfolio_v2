import React from 'react'

import { BackdropWrapper } from './styles'

interface IBackdrop {
  show: boolean
  onCancel: () => void
}

const Backdrop: React.FC<IBackdrop> = ({ show, onCancel }) => {
  if (!show) {
    return null
  }

  return <BackdropWrapper onClick={onCancel} />
}

export default Backdrop
