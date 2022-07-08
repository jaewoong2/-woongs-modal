import React, { createContext, useState } from 'react'
import Modal from '../components/contents/Modal'
import ModalButton from '../components/contents/ModalButton'
import { ModalText } from '../components/contents/ModalText'

export const IMAGE_MOCK_SRC =
  'https://uploads.codesandbox.io/uploads/user/7cd4bee2-a6f4-4c44-a3e9-f670ab1086d9/mnTc-large_.jpg'

type Props = {
  children?: React.ReactNode
}

type StateFunction = (() => void) | undefined

type ModalType = 'normal' | 'button' | 'text'

type ModalContextType = {
  show: () => void
  hide: () => void
  setIsLoading: (b?: boolean) => void
  setType: (t?: ModalType) => void
  setSrc: (s?: string) => void
  setButtonText: (s?: string) => void
  setModalWidth: (s?: string) => void
  setBorderRadius: (s?: string) => void
  setTypes: (s?: 'primary' | 'warn' | 'normal') => void
  setMessage: (c?: React.ReactNode) => void
  setHeader: (c?: React.ReactNode) => void
  setFooterLeftText: (c?: React.ReactNode) => void
  setFooterRightText: (c?: React.ReactNode) => void
  setDescription: (c?: React.ReactNode) => void
  setOnClickFooterLeft: (cb?: () => void) => void
  setOnClickFooterRight: (cb?: () => void) => void
  setOnClickButton: (cb?: () => void) => void
}

const initialContextValue = {} as ModalContextType

export const ModalContext = createContext(initialContextValue)

export const ModalProvider: React.FC<Props> = ({ children }) => {
  const [isShow, setIsShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [src, setSrc] = useState(IMAGE_MOCK_SRC)
  const [borderRadius, setBorderRadius] = useState('8px')
  const [modalWidth, setModalWidth] = useState('450px')
  const [type, setType] = useState<ModalType>('normal')
  const [types, setTypes] = useState<'primary' | 'warn' | 'normal'>('primary')

  const [message, setMessage] = useState<React.ReactNode | null>(null)
  const [description, setDescription] = useState<React.ReactNode | null>(null)
  const [header, setHeader] = useState<React.ReactNode | null>(null)
  const [buttonText, setButtonText] = useState<React.ReactNode | null>(null)
  const [footerLeftText, setFooterLeftText] = useState<React.ReactNode>('닫기')
  const [footerRightText, setFooterRightText] = useState<React.ReactNode>('확인')

  const [onClickFooterLeft, setOnClickFooterLeft] = useState<StateFunction>(() => {})
  const [onClickButton, setOnClickButton] = useState<StateFunction>(() => {})
  const [onClickFooterRight, setOnClickFooterRight] = useState<StateFunction>(() => {})

  return (
    <ModalContext.Provider
      value={{
        show: () => setIsShow(true),
        hide: () => setIsShow(false),
        setIsLoading: (b) => setIsLoading(b ?? false),
        setType: (t) => setType(t ?? 'normal'),
        setSrc: (s) => setSrc(s ?? ''),
        setButtonText: (s) => setButtonText(s),
        setTypes: (s) => setTypes(s ?? 'primary'),
        setBorderRadius: (s) => setBorderRadius(s ?? '8px'),
        setModalWidth: (s) => setModalWidth(s ?? '450px'),
        setHeader: (c) => setHeader(c),
        setMessage: (c) => setMessage(c),
        setFooterLeftText: (c) => setFooterLeftText(c),
        setFooterRightText: (c) => setFooterRightText(c),
        setOnClickFooterLeft: (cb) => setOnClickFooterLeft(cb),
        setOnClickFooterRight: (cb) => setOnClickFooterRight(cb),
        setOnClickButton: (cb) => setOnClickButton(cb),
        setDescription: (c) => setDescription(c),
      }}
    >
      {children}
      {isShow && type === 'normal' && (
        <Modal
          setHide={() => setIsShow(false)}
          message={message}
          modalWidth={modalWidth}
          isLoading={isLoading}
          src={src}
          header={header}
          borderRaidus={borderRadius}
          footerLeftText={footerLeftText}
          footerRightText={footerRightText}
          onClickFooterLeft={onClickFooterLeft}
          onClickFooterRight={onClickFooterRight}
        />
      )}
      {isShow && type === 'button' && (
        <ModalButton
          setHide={() => setIsShow(false)}
          src={src}
          types={types}
          isLoading={isLoading}
          modalWidth={modalWidth}
          message={message}
          buttonText={buttonText}
          header={header}
          borderRaidus={borderRadius}
          onClickButton={onClickButton}
        />
      )}
      {isShow && type === 'text' && (
        <ModalText
          modalWidth={modalWidth}
          setHide={() => setIsShow(false)}
          message={message}
          isLoading={isLoading}
          src={src}
          types={types}
          buttonText={buttonText}
          header={header}
          borderRaidus={borderRadius}
          onClickButton={onClickButton}
          description={description}
        />
      )}
    </ModalContext.Provider>
  )
}
