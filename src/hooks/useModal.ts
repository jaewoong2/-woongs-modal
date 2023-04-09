import {
  InitialModalBasicValue,
  InitialModalButtonValue,
  InitialModalNormalValue,
  InitialModalTextValue,
} from './../constant/index'
import { useModalButton } from './useModalButton'
import { useModalNormal } from './useModalNormal'
import { ModalButtonOptions, ModalNormalOptions, ModalTextOptions } from './../types/index'
import { useModalText } from './useModalText'

function useModal(options: ModalNormalOptions | ModalButtonOptions | ModalTextOptions) {
  if (options.type === 'button') {
    return useModalButton({ ...InitialModalBasicValue, ...InitialModalButtonValue, ...options })
  }

  if (options.type === 'text') {
    return useModalText({ ...InitialModalBasicValue, ...InitialModalTextValue, ...options })
  }

  if (options.type === 'normal') {
    return useModalNormal({ ...InitialModalBasicValue, ...InitialModalNormalValue, ...options })
  }

  return useModalNormal({ ...InitialModalBasicValue, ...InitialModalNormalValue, ...options, type: 'normal' })
}

export { useModal }
