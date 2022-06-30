import React from 'react'
import {
  Left,
  ModalAncher,
  ModalBody,
  ModalContainer,
  ModalContents,
  ModalFooter,
  ModalHeader,
  ModalImageContainer,
  Right,
} from './Modal.styles'

type Props = {
  header?: React.ReactNode
  message?: React.ReactNode
  href?: string
  src?: string
  footerRight?: string
  footerLeft?: string
}

const Modal: React.FC<Props> = ({ header, message, href, src, footerRight, footerLeft }) => {
  return (
    <ModalContainer>
      <ModalContents>
        <ModalHeader>{header}</ModalHeader>
        <ModalAncher href={href}>
          <ModalImageContainer>
            <img src={src} alt={`${header}`} />
          </ModalImageContainer>
          <ModalBody>{message}</ModalBody>
        </ModalAncher>
        <ModalFooter>
          {<Left className="footer-btn">{footerLeft}</Left>}
          {<Right className="footer-btn">{footerRight}</Right>}
        </ModalFooter>
      </ModalContents>
    </ModalContainer>
  )
}

export default Modal
