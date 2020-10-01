import React, { useState, useEffect } from 'react'

const AnimationContainer = ({ show, children }) => {
  const [shouldRender, setRender] = useState(show)

  useEffect(() => {
    setRender(true)
  }, [show])

  const onAnimationEnd = () => {
    setRender(false)
  }

  return shouldRender && <div onAnimationEnd={onAnimationEnd}>{children}</div>
}

export default AnimationContainer
