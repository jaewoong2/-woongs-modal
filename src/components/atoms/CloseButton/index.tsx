import React from 'react'
import { Button } from './Close.styles'
import { CloseIcon } from './CloseIcon'

export const CloseButton = React.forwardRef<HTMLButtonElement, React.DetailsHTMLAttributes<HTMLButtonElement>>(
  ({ ...props }, ref) => {
    return (
      <Button aria-label="close button" type="button" tabIndex={0} ref={ref} {...props}>
        <CloseIcon />
      </Button>
    )
  },
)

CloseButton.displayName = 'CancleButton'
