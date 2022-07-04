import React from 'react'
import { Image } from '../../atoms/Image'
import { ModalAncher, ModalImageContainer, ModalBodyContainer } from './ModalBody.styles'

type Props = {
  href?: string
  src?: string
  className?: string
  alt?: string
  message?: React.ReactNode
}

const ModalBody: React.FC<Props> = ({ href, alt, src, message, className }) => {
  return (
    <ModalAncher className={className} href={href}>
      <ModalImageContainer>
        <Image src={src} alt={alt} />
      </ModalImageContainer>
      <ModalBodyContainer>{message}</ModalBodyContainer>
    </ModalAncher>
  )
}

export default ModalBody
