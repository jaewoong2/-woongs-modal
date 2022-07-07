import { IMAGE_MOCK_SRC, ModalContext } from './../context/ModalProvider'
import { useContext, useEffect } from 'react'

export type ModalButtonOptions = {
  types?: 'primary' | 'warn'
  src?: string
  href?: string
  borderRadius?: string
  isLoading?: boolean
  buttonText?: string
  message?: React.ReactNode
  header?: React.ReactNode

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
    setHref,
    setButtonText,
    setMessage,
    setSrc,
  } = useContext(ModalContext)

  useEffect(() => {
    setType('button')
    setBorderRadius(options?.borderRadius ?? '8px')
    setSrc(options?.src ?? IMAGE_MOCK_SRC)
    setHref(options?.href)
    setTypes(options?.types)
    setHeader(options?.header)
    setMessage(options?.message)
    setOnClickButton(options?.onClickButton)
    setIsLoading(options.isLoading)
    setButtonText(options.buttonText)
  }, [options])

  return { show, hide }
}

export { useModalButton }
