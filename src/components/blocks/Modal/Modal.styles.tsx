import { css } from '@emotion/react'
import styled from '@emotion/styled'

type ModalContentsProps = {
  borderRaidus: string
}

const primaryColor = '#3e79ff'
const warnColor = '#ff0000'

const marginValue = {
  x: 20,
  y: 20,
}

const modalWidth = '450px'

export const ModalContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  background-color: #4444449c;
  z-index: 9998;
`

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

export const ModalContents = styled.div<ModalContentsProps>`
  width: ${modalWidth};
  background-color: white;
  border-radius: ${({ borderRaidus }) => borderRaidus};

  z-index: 9999;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
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

export const ModalHeader = styled.div`
  margin: ${marginValue.y}px;
`

export const ModalBody = styled.div`
  width: 100%;
  margin: ${marginValue.y}px ${marginValue.x}px;
  margin-bottom: 0px;
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px ${marginValue.x}px;

  .footer-btn {
    width: 100%;
    padding: ${5}px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
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
