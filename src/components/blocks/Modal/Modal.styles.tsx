import styled from '@emotion/styled'

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

export const ModalContents = styled.div`
  width: ${modalWidth};
  background-color: white;
  border-radius: 16px;

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

export const ModalBody = styled.div``

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${marginValue.y}px ${marginValue.x}px;

  .footer-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    border: none;
    background-color: transparent;

    font-size: 1em;

    cursor: pointer;
  }
`

export const Left = styled.button`
  margin-right: 10px;
  position: relative;

  &::after {
    position: absolute;
    background-color: #272727;
    content: '';

    width: 2px;
    height: 100%;

    left: calc(100% + 11px);
  }
`

export const Right = styled.button`
  margin-left: 10px;
`
