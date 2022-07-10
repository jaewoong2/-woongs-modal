import { ModalButtonOptions, useModalButton } from './useModalButton'
import { ModalNoramlOptions, useModalNormal } from './useModalNormal'
import { ModalType } from './../types/index'
import { useContext, useEffect } from 'react'
import { ModalActionContext } from '../context/ModalProvider'
import { ModalTextOptions, useModalText } from './useModalText'

function useModal(t: 'normal', o: ModalNoramlOptions): { show: () => void; hide: () => void }
function useModal(t: 'button', o: ModalButtonOptions): { show: () => void; hide: () => void }
function useModal(t: 'text', o: ModalTextOptions): { show: () => void; hide: () => void }
function useModal(type: ModalType, options: ModalNoramlOptions | ModalButtonOptions | ModalTextOptions) {
  const { setType } = useContext(ModalActionContext)

  useEffect(() => {
    setType((prev) => {
      console.log(prev)
      console.log(type)
      return type
    })
  }, [type])

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
