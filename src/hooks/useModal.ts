import { ModalContext } from './../context/ModalProvider'
import { useContext, useEffect } from 'react'

type Options = {
  src: string
  href: string

  message: React.ReactNode
  header: React.ReactNode
  footerLeftText: React.ReactNode
  footerRightText: React.ReactNode

  onClickFooterLeft: () => void
  onClickFooterRight: () => void
}

export const useModal = (options?: Options) => {
  const {
    show,
    hide,
    setFooterLeftText,
    setFooterRightText,
    setHeader,
    setHref,
    setMessage,
    setOnClickFooterLeft,
    setOnClickFooterRight,
    setSrc,
  } = useContext(ModalContext)

  useEffect(() => {
    if (options) {
      setFooterLeftText(options.footerLeftText)
      setFooterRightText(options.footerRightText)
      setHeader(options.header)
      setHref(options.href)
      setMessage(options.message)
      setSrc(options.src)
      setOnClickFooterLeft(options.onClickFooterLeft)
      setOnClickFooterRight(options.onClickFooterRight)
    }
  }, [])

  return { show, hide }
}
