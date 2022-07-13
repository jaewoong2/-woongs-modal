import React from 'react'
import { ButtonType } from '../../../types'
import { Button } from '../../atoms/Button'
import ModalBasic from '../../blocks/ModalBasic'
import ModalFooter from '../../blocks/ModalFooter'
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
      body={<ModalTextBody description={description} isLoading={isLoading} message={message} />}
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
