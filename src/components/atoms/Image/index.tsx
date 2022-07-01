import React, { useState } from 'react'
import { SkeletonImage } from './Image.styles'

type ImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'onLoad' | 'onError'>

const Image = React.forwardRef<HTMLImageElement, ImageProps>(({ ...props }, ref) => {
  const [, setLoading] = useState(true)

  const getError = () => {
    setLoading(false)
  }

  return <img ref={ref} src={props.src} alt="" onLoad={() => setLoading(false)} onError={getError} {...props} />
})

Image.displayName = 'Image'

export { Image }
