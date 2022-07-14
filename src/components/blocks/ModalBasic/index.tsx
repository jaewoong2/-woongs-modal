import React, { useCallback } from 'react'
import { CloseButton } from '../../atoms/CloseButton'
import { TopButtons } from '../../atoms/TopButtons'
import { ModalContainer, ModalHeader, ModalContents, ModalFooter } from './ModalBasic.styles'

type ModalBasicProps = {
  borderRaidus?: string
  modalWidth?: string
  fontSize?: string
  header: React.ReactNode
  body?: React.ReactNode
  footer?: React.ReactNode

  setHide: () => void
}

export const ModalBasic: React.FC<ModalBasicProps> = ({
  modalWidth,
  setHide,
  borderRaidus,
  header,
  body,
  footer,
  fontSize,
}) => {
  const handleModalView = useCallback((e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e?.target === e?.currentTarget) {
      setHide()
    }
  }, [])

  return (
    <ModalContainer onClick={handleModalView}>
      <TopButtons modalWidth={modalWidth}>
        <CloseButton onClick={setHide} />
      </TopButtons>
      <ModalContents
        fontSize={fontSize}
        role="dialog"
        aria-label="modal"
        modalWidth={modalWidth}
        borderRaidus={borderRaidus ?? '8px'}
      >
        <ModalHeader>{header}</ModalHeader>
        {body}
        <ModalFooter>{footer}</ModalFooter>
      </ModalContents>
    </ModalContainer>
  )
}
