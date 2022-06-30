import React, { useEffect } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Modal from './index'
// import { useToast } from '@jaewoong2/toast'
import { useModal } from '../../../hooks/useModal'

export default {
  title: 'Block/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = ({ ...options }) => {
  const { show, hide } = useModal()

  useEffect(() => {}, [])

  return (
    <div style={{ width: '400px', height: '400px', background: '#d9d9d9', position: 'relative' }}>
      <button onClick={() => show()}>Show</button>
      <button onClick={hide}>Hide</button>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Toast Message',
}
