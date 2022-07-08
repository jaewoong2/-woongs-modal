import React, { useCallback } from 'react'
import { ModalContainer, ModalHeader, ModalContents, ModalFooter } from './ModalBasic.styles'

type ModalBasicProps = {
  isLoading: boolean
  borderRaidus: string
  modalWidth?: string

  header: React.ReactNode
  body?: React.ReactNode
  footer?: React.ReactNode

  setHide: () => void
}

const ModalBasic: React.FC<ModalBasicProps> = ({ modalWidth, setHide, borderRaidus, header, body, footer }) => {
  const handleModalView = useCallback((e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e?.target === e?.currentTarget) {
      setHide()
    }
  }, [])

  return (
    <ModalContainer onClick={handleModalView}>
      <ModalContents modalWidth={modalWidth} borderRaidus={borderRaidus ?? '8px'}>
        <ModalHeader>{header}</ModalHeader>
        {body}
        <ModalFooter>{footer}</ModalFooter>
      </ModalContents>
    </ModalContainer>
  )
}

export default ModalBasic
