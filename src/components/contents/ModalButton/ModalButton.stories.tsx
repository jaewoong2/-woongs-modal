import React, { useEffect, useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import ModalButton from './index'
import { useModal } from '../../../hooks/useModal'
import { ModalButtonOptions } from '../../../types'

export default {
  title: 'Block/ModalButton',
  component: ModalButton,
  argTypes: {},
} as ComponentMeta<typeof ModalButton>

const IMAGE_SRC =
  'https://images.unsplash.com/photo-1656786998196-77a60593173c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80'

const Template = ({ ...options }) => {
  const [option, setOption] = useState<ModalButtonOptions>()
  const { show, hide } = useModal('button', { isLoading: true, ...option })

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
  message: 'ModalButton Message',
  modalWidth: '450px',
  src: IMAGE_SRC,
  isLoading: false,
  buttonText: 'Button Text Message',
}

export const Skeleton = Template.bind({})
Skeleton.args = {
  isLoading: true,
  src: IMAGE_SRC,
}

export const LongText = Template.bind({})
LongText.args = {
  description: 'ModalText Description',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula bibendum nisl ac mattis. Pellentesque nec lectus massa. Sed consequat aliquet consequat. Sed commodo lectus at placerat elementum. Duis non eros eu libero feugiat tincidunt eu quis nulla. Mauris viverra ipsum eget arcu mollis, vitae tempus ipsum tempus. Nulla faucibus, nunc non pulvinar cursus, augue nisl iaculis ligula, in laoreet ipsum dolor a arcu. Phasellus vel aliquam felis. Praesent enim felis, pretium semper varius a, sagittis quis neque. Sed non',
  buttonText: 'Button Text Message',
  isLoading: false,
  src: IMAGE_SRC,
}

export const Warn = Template.bind({})
Warn.args = {
  buttonType: 'warn',
  src: IMAGE_SRC,
  message: 'Warnning',
  buttonText: 'Button Text Message',
  isLoading: false,
}

export const Normal = Template.bind({})
Normal.args = {
  buttonType: 'normal',
  message: 'Normal',
  src: IMAGE_SRC,
  buttonText: 'Button Text Message',
  isLoading: false,
}
