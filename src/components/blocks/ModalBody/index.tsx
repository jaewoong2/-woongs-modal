import React from 'react'
import DefferedComponent from '../../atoms/Defferd'
import { Image } from '../../atoms/Image'
import Message from '../../atoms/Message'
import { ModalImageContainer, ModalBodyContainer, ModalMessageContainer } from './ModalBody.styles'

type Props = {
  src?: string
  className?: string
  isLoading: boolean
  alt?: string
  message?: React.ReactNode
}

const ModalBody: React.FC<Props> = ({ isLoading, alt, src, message, className }) => {
  return (
    <ModalBodyContainer className={className}>
      <DefferedComponent isLoaded={!isLoading}>
        <ModalImageContainer>
          <Image isLoading={isLoading} src={src} alt={alt} />
        </ModalImageContainer>
        <ModalMessageContainer>
          <Message isLoading={isLoading}>{message}</Message>
        </ModalMessageContainer>
      </DefferedComponent>
    </ModalBodyContainer>
  )
}

export default ModalBody
