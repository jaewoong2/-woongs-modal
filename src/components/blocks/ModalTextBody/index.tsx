import React from 'react'
import Message from '../../atoms/Message'
import { TextBodyContainer } from './ModalTextBody.styles'

type ModalTextBodyProps = {
  message?: React.ReactNode
  description?: React.ReactNode
  isLoading?: boolean
}

const ModalTextBody: React.FC<ModalTextBodyProps> = ({ message, description, isLoading }) => {
  return (
    <TextBodyContainer>
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
    </TextBodyContainer>
  )
}

export default ModalTextBody
