import React, { useEffect, useState } from 'react'

type DefferedComponentProps = {
  deferTime?: number
  isLoaded?: boolean
} & React.DelHTMLAttributes<React.ReactFragment>

export const DefferedComponent: React.FC<DefferedComponentProps> = ({
  isLoaded = false,
  deferTime = 200,
  children,
}) => {
  const [isDeferred, setIsDeferred] = useState(isLoaded ? true : false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDeferred(true)
    }, deferTime)

    return () => clearTimeout(timer)
  }, [])

  if (!isDeferred) {
    return null
  }

  return <React.Fragment>{children}</React.Fragment>
}

DefferedComponent.displayName = 'DefferedComponent'
