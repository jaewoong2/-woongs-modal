import styled from '@emotion/styled'
const marginValue = {
  x: 20,
  y: 20,
}

export const ModalBodyContainer = styled.section`
  width: fit-content;
  height: fit-content;

  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const ModalImageContainer = styled.picture<{ width?: string; height?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`
export const ModalMessageContainer = styled.section<{ width?: string; height?: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px ${marginValue.x}px;
  margin-bottom: 0px;
  max-width: 93%;

  .message-skeleton {
    height: 20px;
  }
`
