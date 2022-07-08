import { IMAGE_MOCK_SRC, ModalContext } from './../context/ModalProvider'
import { useContext, useEffect } from 'react'

export type ModalButtonOptions = {
  types?: 'primary' | 'warn'
  src?: string
  borderRadius?: string
  isLoading?: boolean
  buttonText?: string
  message?: React.ReactNode
  header?: React.ReactNode
  modalWidth?: string
  onClickButton?: () => void
}

const useModalButton = ({ ...options }: ModalButtonOptions) => {
  const {
    show,
    setIsLoading,
    hide,
    setBorderRadius,
    setOnClickButton,
    setType,
    setTypes,
    setHeader,
    setButtonText,
    setModalWidth,
    setMessage,
    setSrc,
  } = useContext(ModalContext)

  useEffect(() => {
    setType('button')
    setBorderRadius(options?.borderRadius ?? '8px')
    setSrc(options?.src ?? IMAGE_MOCK_SRC)
    setTypes(options?.types)
    setHeader(options?.header)
    setMessage(options?.message)
    setOnClickButton(options?.onClickButton)
    setIsLoading(options.isLoading)
    setButtonText(options.buttonText)
    setModalWidth(options.modalWidth)
  }, [options])

  return { show, hide }
}

export { useModalButton }
