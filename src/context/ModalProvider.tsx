import React, { createContext, useState } from 'react'
import Modal from '../components/blocks/Modal'

const IMAGE_MOCK_SRC =
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80'

type Props = {
  children?: React.ReactNode
}

type ModalContextType = {
  show: () => void
  hide: () => void
}

const initialContextValue = {} as ModalContextType

export const ModalContext = createContext(initialContextValue)

export const ModalProvider: React.FC<Props> = ({ children }) => {
  const [isShow, setIsShow] = useState(false)
  const [src, setSrc] = useState(IMAGE_MOCK_SRC)
  const [href, setHref] = useState('')

  const [header, setHeader] = useState<React.ReactNode | null>(null)
  const [footerLeft, setFooterLeft] = useState('닫기')
  const [footerRight, setFooterRight] = useState('확인')

  return (
    <ModalContext.Provider
      value={{
        show: () => setIsShow(true),
        hide: () => setIsShow(false),
      }}
    >
      {children}
      {<Modal src={src} href={href} header={header} footerLeft={footerLeft} footerRight={footerRight}></Modal>}
    </ModalContext.Provider>
  )
}
