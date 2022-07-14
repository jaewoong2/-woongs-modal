import { ModalButtonOptions } from './../types/index'
import { ModalButtonContext } from './../context/ModalButtonProvider'
import { useContext, useEffect } from 'react'

const useModalButton = ({ ...options }: ModalButtonOptions) => {
  const {
    show,
    setIsLoading,
    hide,
    setBorderRadius,
    setOnClickButton,
    setButtonType,
    setHeader,
    setButtonText,
    setFontSize,
    setModalWidth,
    setMessage,
    setSrc,
  } = useContext(ModalButtonContext)

  useEffect(() => {
    setBorderRadius(options?.borderRadius)
    setSrc(options?.src)
    setButtonType(options?.buttonType)
    setHeader(options?.header)
    setMessage(options?.message)
    setOnClickButton(options?.onClickButton)
    setIsLoading(options.isLoading)
    setButtonText(options.buttonText)
    setFontSize(options.fontSize)
    setModalWidth(options.modalWidth)
  }, [options])

  return { show, hide }
}

export { useModalButton }
