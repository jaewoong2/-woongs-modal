import styled from '@emotion/styled'
const marginValue = {
  x: 20,
  y: 20,
}

export const ModalBodyContainer = styled.section`
  width: 100%;
  color: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 10px;
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
`
