import styled from '@emotion/styled'

export const Divider = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #272727;
`
