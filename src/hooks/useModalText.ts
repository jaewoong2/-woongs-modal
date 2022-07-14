import { ModalTextOptions } from './../types/index'
import { ModalTextContext } from './../context/ModalTextProvider'
import { useContext, useEffect } from 'react'

const useModalText = ({ ...options }: ModalTextOptions) => {
  const {
    show,
    hide,
    setBorderRadius,
    setHeader,
    setMessage,
    setIsLoading,
    setButtonType,
    setFontSize,
    setOnClickButton,
    setDescription,
    setButtonText,
    setModalWidth,
  } = useContext(ModalTextContext)

  useEffect(() => {
    setBorderRadius(options?.borderRadius)
    setHeader(options?.header)
    setMessage(options?.message)
    setDescription(options?.description)
    setFontSize(options.fontSize)
    setIsLoading(options?.isLoading)
    setOnClickButton(options?.onClickButton)
    setModalWidth(options.modalWidth)
    setButtonText(options.buttonText)
    setButtonType(options.buttonType)
  }, [options])

  return { show, hide }
}

export { useModalText }
