import React from 'react'
import { ButtonType } from '../../../types'
import { Container, ModalButton } from './ModalButtonFooter.styles'

type Props = {
  children?: React.ReactNode
  onClickButton?: () => void
  buttonType: ButtonType
}

const ModalButtonFooter: React.FC<Props> = ({ children, onClickButton, buttonType }) => {
  return (
    <Container>
      <ModalButton onClick={onClickButton} type="button" buttonType={buttonType}>
        {children}
      </ModalButton>
    </Container>
  )
}

export default ModalButtonFooter
