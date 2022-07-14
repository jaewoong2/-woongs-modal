import React, { createContext, useState } from 'react'
import Modal from '../components/contents/Modal'

type Props = {
  children?: React.ReactNode
}

type ModalNormalContextType = {
  show: () => void
  hide: () => void
  setIsLoading: (b?: boolean) => void
  setFontSize: (s?: string) => void
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

  const [src, setSrc] = useState<string>()
  const [borderRadius, setBorderRadius] = useState<string | undefined>('8px')
  const [modalWidth, setModalWidth] = useState<string | undefined>('450px')
  const [fontSize, setFontSize] = useState<string | undefined>()
  const [footerLeftText, setFooterLeftText] = useState<React.ReactNode>('닫기')
  const [footerRightText, setFooterRightText] = useState<React.ReactNode>('확인')

  const [message, setMessage] = useState<React.ReactNode | null>(null)
  const [header, setHeader] = useState<React.ReactNode | null>(null)

  const [onClickFooterLeft, setOnClickFooterLeft] = useState<() => void>(() => {})
  const [onClickFooterRight, setOnClickFooterRight] = useState<() => void>(() => {})

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
        setFontSize: (s) => setFontSize(s),
        setFooterRightText: (c) => setFooterRightText(c),
        setOnClickFooterLeft: (cb) => setOnClickFooterLeft(() => cb),
        setOnClickFooterRight: (cb) => setOnClickFooterRight(() => cb),
      }}
    >
      {children}
      {isShow && (
        <Modal
          setHide={() => setIsShow(false)}
          message={message}
          modalWidth={modalWidth}
          isLoading={isLoading}
          fontSize={fontSize}
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
