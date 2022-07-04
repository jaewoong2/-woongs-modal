import React, { useEffect, useState } from 'react'
import { SkeletonImage } from './Image.styles'

type ImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'onLoad' | 'onError'>

/*
 * auto: 속성을 포함하지 않는 것과 동일한 브라우저의 기본 지연 로딩 동작입니다.
 * lazy: 뷰포트로부터 계산된 거리에 도달할 때까지 리소스 로딩을 지연시킵니다.
 * eager: 페이지에서의 위치에 관계없이 리소스를 즉시 로드합니다.
 */
const Image = React.forwardRef<HTMLImageElement, ImageProps>(({ ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(true)
  const [skeleton, setSkeleton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setSkeleton(true)
      }
    }, 200)

    return () => clearTimeout(timer)
  }, [isLoading])

  const getError = () => {
    setIsLoading(false)
  }

  const onLoad = () => {
    setIsLoading(false)
  }

  return (
    <SkeletonImage skeleton={skeleton} isLoading={isLoading}>
      <img
        ref={ref}
        src={props.src}
        alt=""
        loading="lazy"
        onLoad={onLoad}
        onError={getError}
        width={'450px'}
        height={'250px'}
        {...props}
      />
    </SkeletonImage>
  )
})

Image.displayName = 'Image'

export { Image }
