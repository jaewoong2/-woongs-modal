import React from 'react'
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
  const { show, hide } = useModalButton({ ...options })

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
}
