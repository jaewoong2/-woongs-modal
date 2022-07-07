import React, { createContext, useEffect, useState } from 'react'
import Modal from '../components/contents/Modal'
import ModalButton from '../components/contents/ModalButton'

export const IMAGE_MOCK_SRC =
  'https://uploads.codesandbox.io/uploads/user/7cd4bee2-a6f4-4c44-a3e9-f670ab1086d9/mnTc-large_.jpg'

type Props = {
  children?: React.ReactNode
}

type StateFunction = () => void | undefined

type ModalType = 'normal' | 'button'

type ModalContextType = {
  show: () => void
  hide: () => void
  setIsLoading: (b: boolean) => void
  setType: (t: ModalType) => void
  setSrc: (s: string) => void
  setHref: (s: string) => void
  setBorderRadius: (s: string) => void
  setTypes: (s: 'primary' | 'warn') => void
  setMessage: (c: React.ReactNode) => void
  setHeader: (c: React.ReactNode) => void
  setFooterLeftText: (c: React.ReactNode) => void
  setFooterRightText: (c: React.ReactNode) => void
  setOnClickFooterLeft: (cb: () => void) => void
  setOnClickFooterRight: (cb: () => void) => void
  setOnClickButton: (cb: () => void) => void
}

const initialContextValue = {} as ModalContextType

export const ModalContext = createContext(initialContextValue)

export const ModalProvider: React.FC<Props> = ({ children }) => {
  const [isShow, setIsShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [src, setSrc] = useState(IMAGE_MOCK_SRC)
  const [href, setHref] = useState('')
  const [borderRadius, setBorderRadius] = useState('')
  const [type, setType] = useState<ModalType>('normal')
  const [types, setTypes] = useState<'primary' | 'warn'>('primary')

  const [message, setMessage] = useState<React.ReactNode | null>(null)
  const [header, setHeader] = useState<React.ReactNode | null>(null)
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
        setIsLoading: (b) => setIsLoading(b),
        setType: (t) => setType(t),
        setSrc: (s) => setSrc(s),
        setHref: (s) => setHref(s),
        setTypes: (s) => setTypes(s),
        setBorderRadius: (s) => setBorderRadius(s),
        setHeader: (c) => setHeader(c),
        setMessage: (c) => setMessage(c),
        setFooterLeftText: (c) => setFooterLeftText(c),
        setFooterRightText: (c) => setFooterRightText(c),
        setOnClickFooterLeft: (cb) => setOnClickFooterLeft(cb),
        setOnClickFooterRight: (cb) => setOnClickFooterRight(cb),
        setOnClickButton: (cb) => setOnClickButton(cb),
      }}
    >
      {children}
      {isShow && type === 'normal' && (
        <Modal
          setHide={() => setIsShow(false)}
          message={message}
          isLoading={isLoading}
          src={src}
          href={href}
          header={header}
          borderRaidus={borderRadius}
          footerLeftText={footerLeftText}
          footerRightText={footerRightText}
          onClickFooterLeft={onClickFooterLeft}
          onClickFooterRight={onClickFooterRight}
        ></Modal>
      )}
      {isShow && type === 'button' && (
        <ModalButton
          setHide={() => setIsShow(false)}
          src={src}
          href={href}
          types={types}
          isLoading={isLoading}
          message={message}
          header={header}
          borderRaidus={borderRadius}
          onClickButton={onClickButton}
        ></ModalButton>
      )}
    </ModalContext.Provider>
  )
}
