import React from 'react'
import { ModalButtonProvider } from './ModalButtonProvider'
import { ModalNormalProvider } from './ModalNormalProvider'
import { ModalTextProvider } from './ModalTextProvider'

type ModalProviderProps = {
  children: React.ReactNode
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  return (
    <ModalButtonProvider>
      <ModalNormalProvider>
        <ModalTextProvider>{children}</ModalTextProvider>
      </ModalNormalProvider>
    </ModalButtonProvider>
  )
}
