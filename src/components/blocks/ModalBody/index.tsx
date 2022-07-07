import React from 'react'
import { Image } from '../../atoms/Image'
import Message from '../../atoms/Message'
import { ModalAncher, ModalImageContainer, ModalBodyContainer } from './ModalBody.styles'

type Props = {
  href?: string
  src?: string
  className?: string
  isLoading: boolean
  alt?: string
  message?: React.ReactNode
}

const ModalBody: React.FC<Props> = ({ isLoading, href, alt, src, message, className }) => {
  return (
    <ModalAncher className={className} href={href}>
      <ModalImageContainer>
        <Image isLoading={isLoading} src={src} alt={alt} />
      </ModalImageContainer>
      <ModalBodyContainer>
        <Message isLoading={isLoading}>{message}</Message>
      </ModalBodyContainer>
    </ModalAncher>
  )
}

export default ModalBody
