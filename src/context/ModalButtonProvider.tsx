import React, { createContext, useState } from 'react'
import ModalButton from '../components/contents/ModalButton'

export const IMAGE_MOCK_SRC =
  'https://uploads.codesandbox.io/uploads/user/7cd4bee2-a6f4-4c44-a3e9-f670ab1086d9/mnTc-large_.jpg'

type Props = {
  children?: React.ReactNode
}

type StateFunction = (() => void) | undefined

type ModalButtonContextType = {
  show: () => void
  hide: () => void
  setIsLoading: (b?: boolean) => void
  setSrc: (s?: string) => void
  setButtonText: (s?: string) => void
  setModalWidth: (s?: string) => void
  setBorderRadius: (s?: string) => void
  setTypes: (s?: 'primary' | 'warn' | 'normal') => void
  setMessage: (c?: React.ReactNode) => void
  setHeader: (c?: React.ReactNode) => void
  setOnClickButton: (cb?: () => void) => void
}

const initialContextValue = {} as ModalButtonContextType

export const ModalButtonContext = createContext(initialContextValue)

export const ModalButtonProvider: React.FC<Props> = ({ children }) => {
  const [isShow, setIsShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [src, setSrc] = useState<string | undefined>(IMAGE_MOCK_SRC)
  const [borderRadius, setBorderRadius] = useState<string | undefined>('8px')
  const [modalWidth, setModalWidth] = useState<string | undefined>('450px')
  const [types, setTypes] = useState<'primary' | 'warn' | 'normal' | undefined>('primary')

  const [message, setMessage] = useState<React.ReactNode | null>(null)
  const [header, setHeader] = useState<React.ReactNode | null>(null)
  const [buttonText, setButtonText] = useState<React.ReactNode | null>(null)

  const [onClickButton, setOnClickButton] = useState<StateFunction>(() => {})

  return (
    <ModalButtonContext.Provider
      value={{
        show: () => setIsShow(true),
        hide: () => setIsShow(false),
        setIsLoading: (b) => setIsLoading(b ?? false),
        setSrc: (s) => setSrc(s),
        setButtonText: (s) => setButtonText(s),
        setTypes: (s) => setTypes(s),
        setBorderRadius: (s) => setBorderRadius(s),
        setModalWidth: (s) => setModalWidth(s),
        setHeader: (c) => setHeader(c),
        setMessage: (c) => setMessage(c),
        setOnClickButton: (cb) => setOnClickButton(cb),
      }}
    >
      {children}
      {isShow && (
        <ModalButton
          setHide={() => setIsShow(false)}
          src={src}
          types={types}
          modalWidth={modalWidth}
          borderRaidus={borderRadius}
          isLoading={isLoading}
          message={message}
          buttonText={buttonText}
          header={header}
          onClickButton={onClickButton}
        />
      )}
    </ModalButtonContext.Provider>
  )
}
