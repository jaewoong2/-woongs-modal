import React, { useEffect, useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { CloseButton } from './index'

export default {
  title: 'Atoms/CloseButton',
  component: CloseButton,
  argTypes: {},
} as ComponentMeta<typeof CloseButton>

const Template = ({ ...args }) => {
  return <CloseButton {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}
