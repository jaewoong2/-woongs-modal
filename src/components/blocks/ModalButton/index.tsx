import React, { useCallback } from 'react'
import ModalBody from '../ModalBody'
import ModalButtonFooter from '../ModalButtonFooter'
import { ModalContainer, ModalContents, ModalFooter, ModalHeader } from './ModalButton.styles'

type Props = {
  header: React.ReactNode
  message: React.ReactNode
  href: string
  src: string
  borderRaidus: string
  types: 'primary' | 'warn'
  onClickButton: () => void
  setHide: () => void
}

const ModalButton: React.FC<Props> = ({ setHide, header, message, types, href, src, borderRaidus, onClickButton }) => {
  const handleModalView = useCallback((e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e?.target === e?.currentTarget) {
      setHide()
    }
  }, [])

  return (
    <ModalContainer onClick={handleModalView}>
      <ModalContents borderRaidus={borderRaidus ?? '8px'}>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody className="modal--body" href={href} src={src} alt={`${header}`} message={message} />
        <ModalFooter>
          <ModalButtonFooter types={types ?? 'primary'} onClickButton={onClickButton}>
            {message}
          </ModalButtonFooter>
        </ModalFooter>
      </ModalContents>
    </ModalContainer>
  )
}

export default ModalButton
