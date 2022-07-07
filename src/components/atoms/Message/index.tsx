import React, { forwardRef, useEffect, useState } from 'react'
import { MessageSkeleton } from './Message.styles'

type Props = { isLoading?: boolean } & React.DetailsHTMLAttributes<HTMLDivElement>

const Message = forwardRef<HTMLDivElement, Props>(({ children, isLoading }, ref) => {
  return (
    <MessageSkeleton isLoading={isLoading}>
      <div ref={ref} className="message-container">
        {children}
      </div>
    </MessageSkeleton>
  )
})

Message.displayName = 'message'

export default Message
