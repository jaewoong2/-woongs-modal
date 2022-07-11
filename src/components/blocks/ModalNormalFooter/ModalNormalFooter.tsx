import { css } from '@emotion/react'
import styled from '@emotion/styled'

const primaryColor = '#3e79ff'
const warnColor = '#ff0000'

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-btn {
    width: 100%;
    padding: 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background-color: transparent;

    font-size: 1em;
    font-weight: 400;
    cursor: pointer;
  }
`

export const Left = styled.button`
  margin-right: 10px;
  position: relative;
  color: ${warnColor};
  &::after {
    ${({ className }) =>
      className?.includes('divider') &&
      css`
        position: absolute;
        background-color: #272727;
        content: '';

        width: 1px;
        height: 2em;

        left: calc(100% + 11px);
      `}
  }
`

export const Right = styled.button`
  margin-left: 10px;

  &:hover {
    color: ${primaryColor};
  }
`
