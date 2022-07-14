import React from 'react'
import { ButtonType } from '../../../types'
import { MessageContainer } from './ModalText.styles'
import { Button, Message } from '../../atoms'
import { ModalBasic, ModalBody, ModalFooter } from '../../blocks'

type ModalTextProps = {
  header: React.ReactNode
  message: React.ReactNode
  description: React.ReactNode
  buttonText: React.ReactNode
  isLoading: boolean
  onClickButton?: () => void
  setHide: () => void
  fontSize?: string
  modalWidth?: string
  borderRaidus?: string
  buttonType?: ButtonType
}

const ModalText: React.FC<ModalTextProps> = ({
  isLoading,
  setHide,
  header,
  message,
  buttonType,
  buttonText,
  description,
  borderRaidus,
  fontSize,
  onClickButton,
  modalWidth,
}) => {
  return (
    <ModalBasic
      fontSize={fontSize}
      modalWidth={modalWidth}
      borderRaidus={borderRaidus}
      header={header}
      setHide={setHide}
      body={
        <ModalBody isLoading={isLoading}>
          <MessageContainer fontSize="1.2em">
            <Message skeleton={{ width: '100%', height: '80px', borderRadius: '8px' }} isLoading={isLoading}>
              {message}
            </Message>
          </MessageContainer>
          <MessageContainer fontSize="1em">
            <Message skeleton={{ width: '80%', height: '20px', borderRadius: '4px' }} isLoading={isLoading}>
              {description}
            </Message>
          </MessageContainer>
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

export { ModalText }
