import { ModalButtonOptions, useModalButton } from './useModalButton'
import { ModalNoramlOptions, useModalNormal } from './useModalNormal'
import { ModalType } from './../types/index'
import { ModalTextOptions, useModalText } from './useModalText'

function useModal(t: 'normal', o: ModalNoramlOptions): { show: () => void; hide: () => void }
function useModal(t: 'button', o: ModalButtonOptions): { show: () => void; hide: () => void }
function useModal(t: 'text', o: ModalTextOptions): { show: () => void; hide: () => void }
function useModal(type: ModalType, options: ModalNoramlOptions | ModalButtonOptions | ModalTextOptions) {
  if (type === 'button') {
    return useModalButton(options)
  }

  if (type === 'normal') {
    return useModalNormal(options)
  }

  if (type === 'text') {
    return useModalText(options)
  }

  return { show: () => {}, hide: () => {} }
}

export { useModal }
