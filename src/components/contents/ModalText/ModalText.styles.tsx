import styled from '@emotion/styled'

type ModalContentsProps = {
  borderRaidus: string
}

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

export const ModalContents = styled.div<ModalContentsProps>`
  width: ${modalWidth};
  background-color: white;
  border-radius: ${({ borderRaidus }) => borderRaidus};

  z-index: 9999;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);

  .messages-container {
    padding: 0 ${marginValue.x}px;

    .description-container {
      .message-skeleton {
        width: 80%;
        height: 20px;
      }
      .description {
        font-size: 1em;
      }
      padding: 5px 0 20px 0;
    }

    .title-container {
      .message-skeleton {
        width: 100%;
        height: 80px;
        border-radius: 8px;
      }

      .title {
        font-size: 1.2em;
      }
      padding: 10px 0;
    }
  }
`

export const ModalHeader = styled.div`
  margin: ${marginValue.y}px;
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px ${marginValue.x}px 20px ${marginValue.x}px;
`
