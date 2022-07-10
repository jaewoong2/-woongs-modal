import React from 'react'
import { ButtonType } from '../../../types'
import ModalBasic from '../../blocks/ModalBasic'
import ModalBody from '../../blocks/ModalBody'
import ModalButtonFooter from '../../blocks/ModalButtonFooter'

type Props = {
  header: React.ReactNode
  message: React.ReactNode
  buttonText: React.ReactNode

  isLoading: boolean

  src?: string
  modalWidth?: string
  borderRaidus?: string
  buttonType?: ButtonType

  onClickButton?: () => void
  setHide: () => void
}

const ModalButton: React.FC<Props> = ({
  isLoading,
  setHide,
  header,
  message,
  buttonType,
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
      setHide={setHide}
      modalWidth={modalWidth}
      body={<ModalBody isLoading={isLoading} className="modal--body" src={src} alt={`${header}`} message={message} />}
      footer={
        <ModalButtonFooter buttonType={buttonType ?? 'primary'} onClickButton={onClickButton}>
          {buttonText}
        </ModalButtonFooter>
      }
    />
  )
}

export default ModalButton
