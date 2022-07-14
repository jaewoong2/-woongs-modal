import styled from '@emotion/styled'
import React, { forwardRef } from 'react'
import { Skeleton } from '../../skeletons/Skeleton'

type Props = {
  skeleton?: {
    width?: string
    height?: string
    borderRadius?: string
    animation?: boolean
  }
  isLoading?: boolean
  fontSize?: string
} & React.DetailsHTMLAttributes<HTMLDivElement>

export const StyledMessage = styled.div<{ fontSize?: string }>`
  font-size: ${({ fontSize }) => fontSize ?? '1em'};
`

export const Message = forwardRef<HTMLDivElement, Props>(
  ({ skeleton, children, isLoading, className, ...props }, ref) => {
    return (
      <Skeleton
        width={skeleton?.width ?? '80%'}
        height={skeleton?.height ?? '20px'}
        borderRadius={skeleton?.borderRadius ?? '50px'}
        isSkeletonShow={isLoading}
      >
        <StyledMessage ref={ref} {...props}>
          {children}
        </StyledMessage>
      </Skeleton>
    )
  },
)

Message.displayName = 'message'
