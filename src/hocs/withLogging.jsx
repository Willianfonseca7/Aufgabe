import React from 'react'

function withLogging(WrappedComponent) {
  function ComponentWithLogging(props) {
    console.log(`Rendered with ${JSON.stringify(props)}`)
    return <WrappedComponent {...props} />
  }

  ComponentWithLogging.displayName = `withLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

  return ComponentWithLogging
}

export default withLogging
