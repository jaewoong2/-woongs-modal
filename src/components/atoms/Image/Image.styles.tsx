import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`

type SkeletonImageType = {
  isLoading: boolean
}

export const SkeletonImage = styled.div<SkeletonImageType>`
  ${({ isLoading }) =>
    isLoading &&
    css`
      background-color: #c2cfd6;
      animation: ${skeletonLoading} 1s linear infinite alternate;
      border: 8px;

      img {
        opacity: 0;
        visibility: hidden;
      }
    `}
`
