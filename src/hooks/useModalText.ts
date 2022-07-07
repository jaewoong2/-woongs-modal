import { ModalContext } from '../context/ModalProvider'
import { useContext, useEffect } from 'react'

export type ModalTextOptions = {
  src?: string
  href?: string
  borderRadius?: string
  isLoading?: boolean

  message?: React.ReactNode
  header?: React.ReactNode
  buttonText?: string
  description?: React.ReactNode
  onClickButton?: () => void
}

const useModalText = ({ ...options }: ModalTextOptions) => {
  const {
    show,
    hide,
    setBorderRadius,
    setHeader,
    setHref,
    setMessage,
    setIsLoading,
    setType,
    setOnClickButton,
    setDescription,
    setButtonText,
  } = useContext(ModalContext)

  useEffect(() => {
    setType('text')
    setBorderRadius(options?.borderRadius ?? '8px')
    setHref(options?.href ?? '')
    setHeader(options?.header)
    setMessage(options?.message)
    setDescription(options?.description)
    setIsLoading(options?.isLoading)
    setOnClickButton(options?.onClickButton)
    setButtonText(options.buttonText)
  }, [options])

  return { show, hide }
}

export { useModalText }
