import { css } from '@emotion/react'
import styled from '@emotion/styled'
const marginValue = {
  x: 20,
  y: 20,
}

export const ModalAncher = styled.a`
  width: fit-content;
  height: fit-content;

  text-decoration: none;
  color: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: ${marginValue.y}px ${marginValue.x}px;
`
export const ModalImageContainer = styled.picture`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`
export const ModalBodyContainer = styled.div`
  width: 100%;
  margin: ${marginValue.y}px ${marginValue.x}px;
  margin-bottom: 0px;
`
