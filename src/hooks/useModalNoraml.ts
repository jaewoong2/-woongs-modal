import { IMAGE_MOCK_SRC, ModalContext } from '../context/ModalProvider'
import { useContext, useEffect } from 'react'

export type ModalNoramlOptions = {
  src: string
  href: string
  borderRadius: string
  isLoading: boolean

  message: React.ReactNode
  header: React.ReactNode
  footerLeftText: React.ReactNode
  footerRightText: React.ReactNode

  onClickFooterLeft: () => void
  onClickFooterRight: () => void
}

const useModalNormal = ({ ...options }: ModalNoramlOptions) => {
  const {
    show,
    hide,
    setBorderRadius,
    setFooterLeftText,
    setFooterRightText,
    setHeader,
    setHref,
    setMessage,
    setOnClickFooterLeft,
    setIsLoading,
    setType,
    setOnClickFooterRight,
    setSrc,
  } = useContext(ModalContext)

  useEffect(() => {
    setType('normal')
    setBorderRadius(options?.borderRadius ?? '8px')
    setFooterLeftText(options?.footerLeftText ?? '닫기')
    setFooterRightText(options?.footerRightText ?? '확인')
    setSrc(options?.src ?? IMAGE_MOCK_SRC)
    setHref(options?.href)
    setHeader(options?.header)
    setMessage(options?.message)
    setOnClickFooterLeft(options?.onClickFooterLeft)
    setOnClickFooterRight(options?.onClickFooterRight)
    setIsLoading(options.isLoading)
  }, [])

  return { show, hide }
}

export { useModalNormal }
