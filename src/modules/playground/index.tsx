import React, { useCallback } from 'react'

import { PlaygroundWrapper } from './styles'
import widgets from './widgets'

const Playground: React.FC = () => {
  const renderWidgets = useCallback(() => {
    return widgets.map(widget => {
      const { Widget, key } = widget
      return (
        <div className="widget" key={key}>
          <Widget />
        </div>
      )
    })
  }, [])

  return <PlaygroundWrapper>{renderWidgets()}</PlaygroundWrapper>
}

export default Playground
