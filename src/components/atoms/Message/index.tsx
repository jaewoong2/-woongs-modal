import React, { forwardRef, useEffect, useState } from 'react'
import { MessageSkeleton } from './Message.styles'

type Props = { isLoading?: boolean } & React.DetailsHTMLAttributes<HTMLDivElement>

export const Message = forwardRef<HTMLDivElement, Props>(({ children, isLoading, className, ...props }, ref) => {
  return (
    <MessageSkeleton className={isLoading ? 'message-skeleton' : ''} isLoading={isLoading}>
      <div ref={ref} className={'message-container ' + className} {...props}>
        {children}
      </div>
    </MessageSkeleton>
  )
})

Message.displayName = 'message'
