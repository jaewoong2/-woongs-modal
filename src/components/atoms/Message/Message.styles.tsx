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
export const MessageSkeleton = styled.div<{ isLoading?: boolean }>`
  ${({ isLoading }) =>
    isLoading
      ? css`
          width: 80%;
          height: 14px;
          background-color: #c2cfd6;
          border-radius: 50px;
          animation: ${skeletonLoading} 1s linear infinite alternate;

          .message-container {
            display: none;
          }
        `
      : css`
          display: block;
        `}
`
