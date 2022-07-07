import React, { useEffect, useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import Modal from './index'
// import { useToast } from '@jaewoong2/toast'
import { useModalNormal, ModalNoramlOptions } from '../../../hooks/useModalNoraml'

export default {
  title: 'Block/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>

const Template = ({ ...options }: ModalNoramlOptions) => {
  const [option, setOption] = useState<ModalNoramlOptions>()
  const { show, hide } = useModalNormal({ isLoading: true, ...option })

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
