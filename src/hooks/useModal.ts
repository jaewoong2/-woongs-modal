import {
  InitialModalBasicValue,
  InitialModalButtonValue,
  InitialModalNormalValue,
  InitialModalTextValue,
} from './../constant/index'
import { useModalButton } from './useModalButton'
import { useModalNormal } from './useModalNormal'
import { ModalButtonOptions, ModalNormalOptions, ModalTextOptions, ModalType } from './../types/index'
import { useModalText } from './useModalText'

function useModal(type: 'normal', opions: ModalNormalOptions): { show: () => void; hide: () => void }
function useModal(type: 'button', opions: ModalButtonOptions): { show: () => void; hide: () => void }
function useModal(type: 'text', opions: ModalTextOptions): { show: () => void; hide: () => void }
function useModal(type: ModalType, options: ModalNormalOptions | ModalButtonOptions | ModalTextOptions) {
  if (type === 'button') {
    return useModalButton({ ...InitialModalBasicValue, ...InitialModalButtonValue, ...options })
  }

  if (type === 'normal') {
    return useModalNormal({ ...InitialModalBasicValue, ...InitialModalNormalValue, ...options })
  }

  if (type === 'text') {
    return useModalText({ ...InitialModalBasicValue, ...InitialModalTextValue, ...options })
  }

  return { show: () => {}, hide: () => {} }
}

export { useModal }
