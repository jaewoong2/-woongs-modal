import styled from '@emotion/styled'

type ModalContentsProps = {
  borderRaidus: string
  modalWidth?: string
}

const marginValue = {
  x: 20,
  y: 20,
}

export const ModalContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;
  background-color: #4444449c;
  z-index: 9998;
`

export const ModalContents = styled.section<ModalContentsProps>`
  width: ${({ modalWidth }) => modalWidth ?? '450px'};
  max-height: 550px;

  background-color: white;
  border-radius: ${({ borderRaidus }) => borderRaidus};

  z-index: 9999;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);

  overflow-y: scroll;

  @media screen and (max-width: ${({ modalWidth }) => modalWidth ?? '450px'}) {
    margin: 0 10px;
  }
`

export const ModalHeader = styled.section`
  margin: ${marginValue.y}px;
`

export const ModalFooter = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 10px ${marginValue.x}px;
`
