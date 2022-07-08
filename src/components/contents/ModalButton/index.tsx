import React, { useEffect } from 'react'
import ModalBasic from '../../blocks/ModalBasic'
import ModalBody from '../../blocks/ModalBody'
import ModalButtonFooter from '../../blocks/ModalButtonFooter'

type Props = {
  header: React.ReactNode
  message: React.ReactNode
  buttonText: React.ReactNode
  src: string
  isLoading: boolean
  modalWidth: string
  borderRaidus: string
  types: 'primary' | 'warn' | 'normal'
  onClickButton?: () => void
  setHide: () => void
}

const ModalButton: React.FC<Props> = ({
  isLoading,
  setHide,
  header,
  message,
  types,
  buttonText,
  src,
  borderRaidus,
  onClickButton,
  modalWidth,
}) => {
  return (
    <ModalBasic
      borderRaidus={borderRaidus}
      header={header}
      isLoading={isLoading}
      setHide={setHide}
      modalWidth={modalWidth}
      body={<ModalBody isLoading={isLoading} className="modal--body" src={src} alt={`${header}`} message={message} />}
      footer={
        <ModalButtonFooter types={types ?? 'primary'} onClickButton={onClickButton}>
          {buttonText}
        </ModalButtonFooter>
      }
    />
  )
}

export default ModalButton
