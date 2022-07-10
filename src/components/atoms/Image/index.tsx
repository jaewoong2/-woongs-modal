import React, { useCallback, useState } from 'react'
import { SkeletonImage, SkeletonContainer } from './Image.styles'

type ImageProps = {
  placeholderSrc?: string
  isLoading: boolean
} & React.ImgHTMLAttributes<HTMLImageElement>

/*
 * auto: 속성을 포함하지 않는 것과 동일한 브라우저의 기본 지연 로딩 동작입니다.
 * lazy: 뷰포트로부터 계산된 거리에 도달할 때까지 리소스 로딩을 지연시킵니다.
 * eager: 페이지에서의 위치에 관계없이 리소스를 즉시 로드합니다.
 */

// (Progressive Image For Performance) With (Defferd Component For UX)
const ProgressiveImage = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, onLoad, onError, isLoading, ...props }, ref) => {
    const [isImageLoading, setIsImageLoading] = useState(true)

    const handleLoaded = useCallback(
      (bool: boolean) => (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsImageLoading(bool)
        if (typeof onLoad === 'function') {
          onLoad(e)
        }
      },
      [onload],
    )

    const hanldeErrored = useCallback(
      (bool: boolean) => (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsImageLoading(bool)
        if (typeof onError === 'function') {
          onError(e)
        }
      },
      [onError],
    )

    return (
      <SkeletonContainer isLoading={isLoading || isImageLoading}>
        <SkeletonImage isLoading={isLoading || isImageLoading} />
        {!isLoading && (
          <img
            ref={ref}
            src={src}
            alt={src?.slice(0, 10)}
            onLoad={handleLoaded(false)}
            onError={hanldeErrored(false)}
            loading="lazy"
            width={'450px'}
            height={'250px'}
            {...props}
          />
        )}
      </SkeletonContainer>
    )
  },
)

ProgressiveImage.displayName = 'Image'

export { ProgressiveImage as Image }
