import { ModalNormalOptions } from './../types/index'
import { ModalNormalContext } from './../context/ModalNormalProvider'
import { useContext, useEffect } from 'react'

const useModalNormal = ({ ...options }: ModalNormalOptions) => {
  const {
    show,
    hide,
    setBorderRadius,
    setFooterLeftText,
    setModalWidth,
    setFooterRightText,
    setHeader,
    setMessage,
    setOnClickFooterLeft,
    setIsLoading,
    setOnClickFooterRight,
    setSrc,
  } = useContext(ModalNormalContext)

  useEffect(() => {
    setBorderRadius(options?.borderRadius)
    setFooterLeftText(options?.footerLeftText)
    setFooterRightText(options?.footerRightText)
    setSrc(options?.src)
    setHeader(options?.header)
    setMessage(options?.message)
    setOnClickFooterLeft(options?.onClickFooterLeft)
    setOnClickFooterRight(options?.onClickFooterRight)
    setIsLoading(options?.isLoading)
    setModalWidth(options.modalWidth)
  }, [options])

  return { show, hide }
}

export { useModalNormal }
