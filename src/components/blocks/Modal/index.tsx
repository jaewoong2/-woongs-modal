import React, { useCallback } from 'react'
import { Image } from '../../atoms/Image'
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
  borderRaidus?: string

  footerRightText?: React.ReactNode
  onClickFooterRight?: () => void

  footerLeftText?: React.ReactNode
  onClickFooterLeft?: () => void

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
        <ModalAncher href={href}>
          <ModalImageContainer>
            <Image src={src} alt={`${header}`} />
          </ModalImageContainer>
          <ModalBody>{message}</ModalBody>
        </ModalAncher>
        <ModalFooter>
          <Left
            onClick={() => {
              if (typeof onClickFooterLeft === 'function') {
                onClickFooterLeft()
              }
              handleModalView()
            }}
            className={'footer-btn ' + `${Boolean(footerLeftText) ? 'divider' : ''}`}
          >
            {footerLeftText}
          </Left>
          <Right onClick={onClickFooterRight} className="footer-btn">
            {footerRightText}
          </Right>
        </ModalFooter>
      </ModalContents>
    </ModalContainer>
  )
}

export default Modal
