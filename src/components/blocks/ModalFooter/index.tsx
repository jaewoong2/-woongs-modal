import React from 'react'
import { Container } from './ModalFooter.styles'

type ModalFooterProps = { children?: React.ReactNode }

const ModalFooter = ({ children }: ModalFooterProps) => {
  return <Container>{children}</Container>
}

type ModalFooterTriggerProps = {
  controls?: React.ReactNode
}

const ModalFooterButton = ({ controls }: ModalFooterTriggerProps) => {
  return <>{controls}</>
}

ModalFooter.Button = ModalFooterButton

export default ModalFooter
