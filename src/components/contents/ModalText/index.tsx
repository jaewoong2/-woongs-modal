import React from 'react'
import { ButtonType } from '../../../types'
import { ModalTextBodyContainer } from './ModalText.styles'
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
  onClickButton,
  modalWidth,
}) => {
  return (
    <ModalBasic
      modalWidth={modalWidth}
      borderRaidus={borderRaidus}
      header={header}
      setHide={setHide}
      body={
        <ModalTextBodyContainer>
          <div className="title-container">
            <Message className="title" isLoading={isLoading}>
              {message}
            </Message>
          </div>
          <div className="description-container">
            <Message className="description" isLoading={isLoading}>
              {description}
            </Message>
          </div>
        </ModalTextBodyContainer>
      }
      footer={
        <ModalFooter>
          <ModalFooter.Button
            controls={
              <Button onClick={onClickButton} buttonType={buttonType}>
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
