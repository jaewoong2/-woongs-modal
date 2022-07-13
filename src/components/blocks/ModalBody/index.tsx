import React from 'react'
import { DefferedComponent } from '../../atoms'
import { ModalImageContainer, ModalBodyContainer, ModalMessageContainer } from './ModalBody.styles'

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

const ModalBodyMessage = ({
  message,
  width,
  height,
  className,
}: {
  message: React.ReactNode
  width?: string
  height?: string
  className?: string
}) => {
  return (
    <ModalMessageContainer className={className} width={width} height={height}>
      {message}
    </ModalMessageContainer>
  )
}

ModalBody.Message = ModalBodyMessage
ModalBody.Image = ModalBodyImage
