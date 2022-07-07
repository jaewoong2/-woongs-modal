import React, { useCallback } from 'react'
import Message from '../../atoms/Message'
import ModalBody from '../../blocks/ModalBody'
import ModalButtonFooter from '../../blocks/ModalButtonFooter'
import { ModalContainer, ModalContents, ModalFooter, ModalHeader } from './ModalText.styles'

type Props = {
  header: React.ReactNode
  message: React.ReactNode
  description: React.ReactNode
  buttonText: React.ReactNode
  href: string
  src: string
  isLoading: boolean
  borderRaidus: string
  types: 'primary' | 'warn'
  onClickButton?: () => void
  setHide: () => void
}

const ModalText: React.FC<Props> = ({
  isLoading,
  setHide,
  header,
  message,
  types,
  buttonText,
  description,
  borderRaidus,
  onClickButton,
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
        <div className="messages-container">
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
        </div>
        <ModalFooter>
          <ModalButtonFooter types={types ?? 'primary'} onClickButton={onClickButton}>
            {buttonText}
          </ModalButtonFooter>
        </ModalFooter>
      </ModalContents>
    </ModalContainer>
  )
}

export { ModalText }
