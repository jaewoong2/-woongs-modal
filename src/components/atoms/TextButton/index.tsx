import styled from '@emotion/styled'

export const TextButton = styled.button<{ color?: string }>`
  color: ${({ color }) => color};
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
`
