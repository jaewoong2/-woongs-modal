import React from 'react'
import { Container, ModalButton } from './ModalButtonFooter.styles'

type Props = {
  children?: React.ReactNode
  onClickButton?: () => void
  types: 'primary' | 'warn' | 'normal'
}

const ModalButtonFooter: React.FC<Props> = ({ children, onClickButton, types }) => {
  return (
    <Container>
      <ModalButton onClick={onClickButton} type="button" types={types}>
        {children}
      </ModalButton>
    </Container>
  )
}

export default ModalButtonFooter
