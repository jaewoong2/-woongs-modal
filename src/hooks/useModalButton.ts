import { ModalButtonContext, IMAGE_MOCK_SRC } from './../context/ModalButtonProvider'
import { useContext, useEffect } from 'react'

export type ModalButtonOptions = {
  types?: 'primary' | 'warn' | 'normal'
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
    setTypes,
    setHeader,
    setButtonText,
    setModalWidth,
    setMessage,
    setSrc,
  } = useContext(ModalButtonContext)

  useEffect(() => {
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
