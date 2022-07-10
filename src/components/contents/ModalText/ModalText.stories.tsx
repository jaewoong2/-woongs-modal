import React, { useEffect, useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { ModalText } from './index'
import { ModalTextOptions } from '../../../hooks/useModalText'
import { useModal } from '../../../hooks/useModal'

export default {
  title: 'Block/ModalText',
  component: ModalText,
  argTypes: {},
} as ComponentMeta<typeof ModalText>

const Template = ({ ...options }) => {
  const [option, setOption] = useState<ModalTextOptions>()
  const { show, hide } = useModal('text', { isLoading: true, ...option })

  useEffect(() => {
    const timer = setTimeout(() => {
      setOption({ ...options })
    }, 1200)

    return () => clearTimeout(timer)
  }, [options])

  return (
    <div style={{ width: '400px', height: '400px', background: '#d9d9d9', position: 'relative' }}>
      <button onClick={() => show()}>Show</button>
      <button onClick={hide}>Hide</button>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  message: 'ModalText Message',
  description: 'ModalText Message',
  isLoading: false,
  buttonText: 'Button Text Message',
}

export const Skeleton = Template.bind({})
Skeleton.args = {
  isLoading: true,
}

export const LongText = Template.bind({})
LongText.args = {
  description: 'ModalText Description',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula bibendum nisl ac mattis. Pellentesque nec lectus massa. Sed consequat aliquet consequat. Sed commodo lectus at placerat elementum. Duis non eros eu libero feugiat tincidunt eu quis nulla. Mauris viverra ipsum eget arcu mollis, vitae tempus ipsum tempus. Nulla faucibus, nunc non pulvinar cursus, augue nisl iaculis ligula, in laoreet ipsum dolor a arcu. Phasellus vel aliquam felis. Praesent enim felis, pretium semper varius a, sagittis quis neque. Sed non',
  buttonText: 'Button Text Message',
  isLoading: false,
}

export const Warn = Template.bind({})
Warn.args = {
  types: 'warn',
  description: 'ModalText Description',
  message: 'Warnning',
  buttonText: 'Button Text Message',
  isLoading: false,
}
