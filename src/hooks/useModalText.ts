import { ModalContext } from '../context/ModalProvider'
import { useContext, useEffect } from 'react'

export type ModalTextOptions = {
  src?: string
  borderRadius?: string
  isLoading?: boolean
  message?: React.ReactNode
  header?: React.ReactNode
  buttonText?: string
  modalWidth?: string
  types: 'normal' | 'primary' | 'warn'
  description?: React.ReactNode
  onClickButton?: () => void
}

const useModalText = ({ ...options }: ModalTextOptions) => {
  const {
    show,
    hide,
    setBorderRadius,
    setHeader,
    setMessage,
    setIsLoading,
    setType,
    setTypes,
    setOnClickButton,
    setDescription,
    setButtonText,
    setModalWidth,
  } = useContext(ModalContext)

  useEffect(() => {
    setType('text')
    setBorderRadius(options?.borderRadius ?? '8px')
    setHeader(options?.header)
    setMessage(options?.message)
    setDescription(options?.description)
    setIsLoading(options?.isLoading)
    setOnClickButton(options?.onClickButton)
    setModalWidth(options.modalWidth)
    setButtonText(options.buttonText)
    setTypes(options.types ?? 'primary')
  }, [options])

  return { show, hide }
}

export { useModalText }
