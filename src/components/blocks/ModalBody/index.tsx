import React from 'react'
import { DefferedComponent } from '../../atoms'
import { ModalImageContainer, ModalBodyContainer } from './ModalBody.styles'

type ModalBodyProps = {
  className?: string
  isLoading: boolean
  children?: React.ReactNode
}

export const ModalBody = ({ isLoading, children, className }: ModalBodyProps) => {
  return (
    <ModalBodyContainer className={className}>
      <DefferedComponent isLoaded={!isLoading}>{children}</DefferedComponent>
    </ModalBodyContainer>
  )
}

const ModalBodyImage = ({ image, width, height }: { image: React.ReactNode; width?: string; height?: string }) => {
  return (
    <ModalImageContainer width={width} height={height}>
      {image}
    </ModalImageContainer>
  )
}

const ModalBodyMessage = ({ message, className }: { message: React.ReactNode; className?: string }) => {
  return <ModalBodyContainer className={className}>{message}</ModalBodyContainer>
}

ModalBody.Message = ModalBodyMessage
ModalBody.Image = ModalBodyImage
