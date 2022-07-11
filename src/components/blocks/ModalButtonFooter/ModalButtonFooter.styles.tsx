import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ButtonType } from '../../../types'

const primaryColor = '#3e79ff'
const hoverColor = '#3890ff'
const normalColor = '#f6f6f6'
const hoverNormalColor = '#cfcfcf'
const warnColor = '#ff4d4f'
const hoverWarnColor = '#ff7875'

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
      color: black;
      background-color: ${normalColor};

      &:hover {
        background-color: ${hoverNormalColor};
      }
    `
  }
}

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalButton = styled.button<{ buttonType: ButtonType }>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 1em;
  font-weight: 400;
  cursor: pointer;
  border-radius: 8px;
  color: white;
  ${({ buttonType }) => getButtonColor(buttonType)};
  transition: background-color 0.3s;
`
