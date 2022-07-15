import { css, Global } from '@emotion/react'

// For Scroll Hidden When Modal Open
export const GlobalStyle = () => (
  <Global
    styles={css`
      html {
        overflow-y: hidden;
      }
    `}
  />
)
