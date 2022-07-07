import React, { useEffect, useMemo, useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import ModalButton from './index'
// import { useToast } from '@jaewoong2/toast'
import { ModalButtonOptions, useModalButton } from '../../../hooks/useModalButton'

export default {
  title: 'Block/ModalButton',
  component: ModalButton,
  argTypes: {},
} as ComponentMeta<typeof ModalButton>

const Template = ({ ...options }: ModalButtonOptions) => {
  const [option, setOption] = useState<ModalButtonOptions>()
  const { show, hide } = useModalButton({ isLoading: true, ...option })

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
  message: 'ModalButton Message',
  isLoading: false,
  buttonText: 'Button Text Message',
}

export const Skeleton = Template.bind({})
Skeleton.args = {
  isLoading: true,
}

export const LongText = Template.bind({})
LongText.args = {
  message:
    'Text is very long Text is very long Text is very long Text is very long Text is very longText is very long Text is very long Text is very long Text is very long Text is very longText is very long Text is very long Text is very long Text is very long Text is very longText is very long Text is very long Text is very long Text is very long Text is very longText is very long Text is very long Text is very long Text is very long Text is very long ',
  buttonText: 'Button Text Message',
  isLoading: false,
}
