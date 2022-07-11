import React from 'react'
import { Container } from './TopButtons.styles'

type TopButtonsProps = {
  children?: React.ReactNode
  modalWidth?: string
}

export const TopButtons: React.FC<TopButtonsProps> = ({ children, modalWidth }) => {
  return <Container modalWidth={modalWidth}>{children}</Container>
}
