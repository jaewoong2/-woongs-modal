import styled from '@emotion/styled'

export const Container = styled.div<{ modalWidth?: string }>`
  width: ${({ modalWidth }) => modalWidth ?? '450px'};
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: ${({ modalWidth }) => `calc(${modalWidth} - 40px)` ?? '410px'}) {
    width: calc(100% - 20px);
  }
`
