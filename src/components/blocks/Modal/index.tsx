import React, { useCallback } from 'react'
import { Image } from '../../atoms/Image'
import ModalBody from '../ModalBody'
import ModalNormalFooter from '../ModalNormalFooter'
import { ModalContainer, ModalContents, ModalFooter, ModalHeader } from './Modal.styles'

type Props = {
  header: React.ReactNode
  message: React.ReactNode
  href: string
  src: string
  borderRaidus: string

  footerRightText: React.ReactNode
  onClickFooterRight: () => void

  footerLeftText: React.ReactNode
  onClickFooterLeft: () => void

  setHide: () => void
}

const Modal: React.FC<Props> = ({
  setHide,
  header,
  message,
  href,
  src,
  borderRaidus,
  footerRightText,
  footerLeftText,
  onClickFooterRight,
  onClickFooterLeft,
}) => {
  const handleModalView = useCallback((e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e?.target === e?.currentTarget) {
      setHide()
    }
  }, [])

  return (
    <ModalContainer onClick={handleModalView}>
      <ModalContents borderRaidus={borderRaidus ?? '8px'}>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody href={href} src={src} alt={`${header}`} message={message} />
        <ModalFooter>
          <ModalNormalFooter
            onClickFooterLeft={onClickFooterLeft}
            onClickFooterRight={onClickFooterRight}
            footerLeftText={footerLeftText}
            footerRightText={footerRightText}
            closeModal={handleModalView}
          />
        </ModalFooter>
      </ModalContents>
    </ModalContainer>
  )
}

export default Modal
