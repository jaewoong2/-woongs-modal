import React from 'react'
import ModalBasic from '../../blocks/ModalBasic'
import ModalButtonFooter from '../../blocks/ModalButtonFooter'
import ModalTextBody from '../../blocks/ModalTextBody'

type ModalTextProps = {
  header: React.ReactNode
  message: React.ReactNode
  description: React.ReactNode
  buttonText: React.ReactNode
  isLoading: boolean
  onClickButton?: () => void
  setHide: () => void

  modalWidth?: string
  borderRaidus?: string
  types?: 'primary' | 'warn' | 'normal'
}

const ModalText: React.FC<ModalTextProps> = ({
  isLoading,
  setHide,
  header,
  message,
  types,
  buttonText,
  description,
  borderRaidus,
  onClickButton,
  modalWidth,
}) => {
  return (
    <ModalBasic
      modalWidth={modalWidth}
      borderRaidus={borderRaidus}
      header={header}
      setHide={setHide}
      body={<ModalTextBody description={description} isLoading={isLoading} message={message} />}
      footer={
        <ModalButtonFooter types={types ?? 'primary'} onClickButton={onClickButton}>
          {buttonText}
        </ModalButtonFooter>
      }
    />
  )
}

export { ModalText }
