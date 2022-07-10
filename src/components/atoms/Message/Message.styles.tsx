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
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  ${({ isLoading }) =>
    isLoading
      ? css`
          width: 80%;
          height: 18px;
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
