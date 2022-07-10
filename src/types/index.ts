export type ModalType = 'normal' | 'button' | 'text'
export type ButtonType = 'normal' | 'primary' | 'warn'

/**
 * isLoading: You can get Skeleton Image
 * borderRadius: You can set Modal`s border-radius
 * modalWidth: You can set Modal`s width
 * message: You can Write your message
 * header: You can Write Your Header
 */
type ModalBasicOptions = {
  isLoading?: boolean
  borderRadius?: string
  modalWidth?: string
  message?: React.ReactNode
  header?: React.ReactNode
}

export type ModalButtonOptions = {
  buttonType?: ButtonType
  src?: string
  buttonText?: string
  onClickButton?: () => void
} & ModalBasicOptions

export type ModalNormalOptions = {
  src?: string

  footerLeftText?: React.ReactNode
  footerRightText?: React.ReactNode

  onClickFooterLeft?: () => void
  onClickFooterRight?: () => void
} & ModalBasicOptions

export type ModalTextOptions = {
  buttonType?: ButtonType
  buttonText?: string
  description?: React.ReactNode

  onClickButton?: () => void
} & ModalBasicOptions
