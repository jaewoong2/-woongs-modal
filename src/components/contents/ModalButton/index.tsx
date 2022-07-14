import React from 'react'

import { Button, Image, Message } from '../../atoms'
import { ModalBasic, ModalBody, ModalFooter } from '../../blocks'
import { ButtonType } from '../../../types'

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
      body={
        <ModalBody isLoading={isLoading}>
          <ModalBody.Image image={<Image src={src} alt={`${header}`} isLoading={isLoading} />} />
          <ModalBody.Message message={<Message>{message}</Message>} />
        </ModalBody>
      }
      footer={
        <ModalFooter>
          <ModalFooter.Button
            controls={
              <Button type="button" onClick={onClickButton} buttonType={buttonType}>
                {buttonText}
              </Button>
            }
          />
        </ModalFooter>
      }
    />
  )
}

export default ModalButton
