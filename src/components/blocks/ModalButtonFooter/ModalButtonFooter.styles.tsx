import { css } from '@emotion/react'
import styled from '@emotion/styled'

const primaryColor = '#3e79ff'
const warnColor = '#ff0000'

type ButtonType = 'primary' | 'warn'

const getButtonColor = (types: ButtonType) => {
  if (types === 'primary') {
    return css`
      background-color: ${primaryColor};
    `
  }

  if (types === 'warn') {
    return css`
      background-color: ${warnColor};
    `
  }
}

export const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalButton = styled.button<{ types: 'primary' | 'warn' }>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  font-size: 1em;
  font-weight: 400;
  cursor: pointer;
  border-radius: 8px;
  color: white;
  ${({ types }) => getButtonColor(types)};
`
