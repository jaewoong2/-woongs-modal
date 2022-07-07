import React, { useEffect, useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { ModalText } from './index'
// import { useToast } from '@jaewoong2/toast'
import { useModalText, ModalTextOptions } from '../../../hooks/useModalText'

export default {
  title: 'Block/ModalText',
  component: ModalText,
  argTypes: {},
} as ComponentMeta<typeof ModalText>

const Template = ({ ...options }: ModalTextOptions) => {
  const [option, setOption] = useState<ModalTextOptions>()
  const { show, hide } = useModalText({ isLoading: true, ...option })

  useEffect(() => {
    const timer = setTimeout(() => {
      setOption({ ...options })
    }, 1500)

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
    'Text is very long Text is very long Text is very long Text is very long Text is very longText is very long Text is very long Text is very long Text is very long Text is very longText is very long Text is very long Text is very long Text is very long Text is very longText is very long Text is very long Text is very long Text is very long Text is very longText is very long Text is very long Text is very long Text is very long Text is very long ',
  buttonText: 'Button Text Message',
  isLoading: false,
}
