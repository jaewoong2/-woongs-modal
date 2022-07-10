import React, { createContext, useMemo, useState } from 'react'
import { ModalText } from '../components/contents/ModalText'
import { ButtonType } from '../types'

type Props = {
  children?: React.ReactNode
}

type StateFunction = (() => void) | undefined

type ModalTextContextType = {
  show: () => void
  hide: () => void
  setIsLoading: (b?: boolean) => void
  setButtonType: (s?: ButtonType) => void
  setButtonText: (s?: string) => void
  setModalWidth: (s?: string) => void
  setBorderRadius: (s?: string) => void
  setMessage: (c?: React.ReactNode) => void
  setHeader: (c?: React.ReactNode) => void
  setDescription: (c?: React.ReactNode) => void
  setOnClickButton: (cb?: () => void) => void
}

const initialContextValue = {} as ModalTextContextType

export const ModalTextContext = createContext(initialContextValue)

export const ModalTextProvider: React.FC<Props> = ({ children }) => {
  const [isShow, setIsShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [borderRadius, setBorderRadius] = useState<string | undefined>('8px')
  const [modalWidth, setModalWidth] = useState<string | undefined>('450px')
  const [buttonType, setButtonType] = useState<ButtonType | undefined>('primary')

  const [message, setMessage] = useState<React.ReactNode | null>(null)
  const [description, setDescription] = useState<React.ReactNode | null>(null)
  const [header, setHeader] = useState<React.ReactNode | null>(null)
  const [buttonText, setButtonText] = useState<React.ReactNode | null>(null)
  const [onClickButton, setOnClickButton] = useState<StateFunction>(() => {})

  const value: ModalTextContextType = useMemo(
    () => ({
      show: () => setIsShow(true),
      hide: () => setIsShow(false),
      setIsLoading: (b) => setIsLoading(b ?? false),
      setButtonText: (s) => setButtonText(s),
      setButtonType: (s) => setButtonType(s),
      setBorderRadius: (s) => setBorderRadius(s),
      setModalWidth: (s) => setModalWidth(s),
      setHeader: (c) => setHeader(c),
      setMessage: (c) => setMessage(c),
      setOnClickButton: (cb) => setOnClickButton(cb),
      setDescription: (c) => setDescription(c),
    }),
    [],
  )

  return (
    <ModalTextContext.Provider value={value}>
      {children}
      {isShow && (
        <ModalText
          modalWidth={modalWidth}
          buttonType={buttonType}
          borderRaidus={borderRadius}
          setHide={() => setIsShow(false)}
          message={message}
          isLoading={isLoading}
          buttonText={buttonText}
          header={header}
          onClickButton={onClickButton}
          description={description}
        />
      )}
    </ModalTextContext.Provider>
  )
}
