import React, { useCallback } from 'react'
import ModalBasic from '../../blocks/ModalBasic'
import ModalBody from '../../blocks/ModalBody'
import ModalNormalFooter from '../../blocks/ModalNormalFooter'

type Props = {
  header: React.ReactNode
  message: React.ReactNode
  isLoading: boolean

  footerRightText: React.ReactNode
  onClickFooterRight?: () => void

  footerLeftText: React.ReactNode
  onClickFooterLeft?: () => void

  setHide: () => void

  src?: string
  modalWidth?: string
  borderRaidus?: string
}

const Modal: React.FC<Props> = ({
  setHide,
  header,
  message,
  isLoading,
  src,
  borderRaidus,
  modalWidth,
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
    <ModalBasic
      borderRaidus={borderRaidus}
      header={header}
      modalWidth={modalWidth}
      setHide={setHide}
      body={<ModalBody isLoading={isLoading} src={src} alt={`${header}`} message={message} />}
      footer={
        <ModalNormalFooter
          onClickFooterLeft={onClickFooterLeft}
          onClickFooterRight={onClickFooterRight}
          footerLeftText={footerLeftText}
          footerRightText={footerRightText}
          closeModal={handleModalView}
        />
      }
    />
  )
}

export default Modal
