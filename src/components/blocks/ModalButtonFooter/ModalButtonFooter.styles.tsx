import { css } from '@emotion/react'
import styled from '@emotion/styled'

const primaryColor = '#3e79ff'
const hoverColor = '#3890ff'
const normalColor = '#f6f6f6'
const warnColor = '#ff4d4f'
const hoverWarnColor = '#ff7875'

type ButtonType = 'primary' | 'warn' | 'normal'

const getButtonColor = (types: ButtonType) => {
  if (types === 'primary') {
    return css`
      background-color: ${primaryColor};

      &:hover {
        background-color: ${hoverColor};
      }
    `
  }

  if (types === 'warn') {
    return css`
      background-color: ${warnColor};

      &:hover {
        background-color: ${hoverWarnColor};
      }
    `
  }

  if (types === 'normal') {
    return css`
      background-color: ${normalColor};
    `
  }
}

export const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalButton = styled.button<{ types: 'primary' | 'warn' | 'normal' }>`
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
  transition: background-color 0.3s;
`
