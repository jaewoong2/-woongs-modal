import React, { createContext, useState } from 'react'
import Modal from '../components/contents/Modal'

export const IMAGE_MOCK_SRC =
  'https://uploads.codesandbox.io/uploads/user/7cd4bee2-a6f4-4c44-a3e9-f670ab1086d9/mnTc-large_.jpg'

type Props = {
  children?: React.ReactNode
}

type StateFunction = (() => void) | undefined

type ModalNormalContextType = {
  show: () => void
  hide: () => void
  setIsLoading: (b?: boolean) => void
  setSrc: (s?: string) => void
  setModalWidth: (s?: string) => void
  setBorderRadius: (s?: string) => void
  setMessage: (c?: React.ReactNode) => void
  setHeader: (c?: React.ReactNode) => void
  setFooterLeftText: (c?: React.ReactNode) => void
  setFooterRightText: (c?: React.ReactNode) => void
  setOnClickFooterLeft: (cb?: () => void) => void
  setOnClickFooterRight: (cb?: () => void) => void
}

const initialContextValue = {} as ModalNormalContextType

export const ModalNormalContext = createContext(initialContextValue)

export const ModalNormalProvider: React.FC<Props> = ({ children }) => {
  const [isShow, setIsShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [src, setSrc] = useState<string | undefined>(IMAGE_MOCK_SRC)
  const [borderRadius, setBorderRadius] = useState<string | undefined>('8px')
  const [modalWidth, setModalWidth] = useState<string | undefined>('450px')

  const [message, setMessage] = useState<React.ReactNode | null>(null)
  const [header, setHeader] = useState<React.ReactNode | null>(null)
  const [footerLeftText, setFooterLeftText] = useState<React.ReactNode>('닫기')
  const [footerRightText, setFooterRightText] = useState<React.ReactNode>('확인')

  const [onClickFooterLeft, setOnClickFooterLeft] = useState<StateFunction>(() => {})
  const [onClickFooterRight, setOnClickFooterRight] = useState<StateFunction>(() => {})

  return (
    <ModalNormalContext.Provider
      value={{
        show: () => setIsShow(true),
        hide: () => setIsShow(false),
        setIsLoading: (b) => setIsLoading(b ?? false),
        setSrc: (s) => setSrc(s),
        setBorderRadius: (s) => setBorderRadius(s),
        setModalWidth: (s) => setModalWidth(s),
        setHeader: (c) => setHeader(c),
        setMessage: (c) => setMessage(c),
        setFooterLeftText: (c) => setFooterLeftText(c),
        setFooterRightText: (c) => setFooterRightText(c),
        setOnClickFooterLeft: (cb) => setOnClickFooterLeft(cb),
        setOnClickFooterRight: (cb) => setOnClickFooterRight(cb),
      }}
    >
      {children}
      {isShow && (
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
    </ModalNormalContext.Provider>
  )
}
