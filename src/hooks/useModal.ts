import { ModalContext } from './../context/ModalProvider'
import { useContext } from 'react'

export const useModal = () => {
  const { show, hide } = useContext(ModalContext)

  return { show, hide }
}
