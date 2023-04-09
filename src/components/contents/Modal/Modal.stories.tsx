import React, { useEffect, useState } from 'react'
import { useModal } from '../../../hooks/useModal'
import { ComponentMeta } from '@storybook/react'
import Modal from './index'
import { ModalNormalOptions } from '../../../types'

export default {
  title: 'Block/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>

const IMAGE_SRC =
  'https://images.unsplash.com/photo-1656786998196-77a60593173c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80'

const Template = ({ ...options }: ModalNormalOptions) => {
  const [option, setOption] = useState<ModalNormalOptions>()
  const { show, hide } = useModal({ isLoading: true, ...option })

  useEffect(() => {
    show()
    const timer = setTimeout(() => {
      setOption({ ...options })
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ width: '400px', height: '400px', background: '#d9d9d9', position: 'relative' }}>
      <button onClick={() => show()}>Show</button>
      <button onClick={hide}>Hide</button>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  type: 'normal',
  message: 'ModalButton Message',
  src: IMAGE_SRC,
  modalWidth: '450px',
  footerLeftText: '닫기',
  footerRightText: '확인',
  isLoading: false,
}

export const Skeleton = Template.bind({})
Skeleton.args = {
  type: 'normal',
  src: IMAGE_SRC,
  isLoading: true,
}

export const LongText = Template.bind({})
LongText.args = {
  type: 'normal',
  isLoading: false,
  src: IMAGE_SRC,
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula bibendum nisl ac mattis. Pellentesque nec lectus massa. Sed consequat aliquet consequat. Sed commodo lectus at placerat elementum. Duis non eros eu libero feugiat tincidunt eu quis nulla. Mauris viverra ipsum eget arcu mollis, vitae tempus ipsum tempus. Nulla faucibus, nunc non pulvinar cursus, augue nisl iaculis ligula, in laoreet ipsum dolor a arcu. Phasellus vel aliquam felis. Praesent enim felis, pretium semper varius a, sagittis quis neque. Sed non',
}
