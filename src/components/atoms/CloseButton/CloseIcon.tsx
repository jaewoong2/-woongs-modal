import React from 'react'

export const CloseIcon = React.forwardRef<SVGSVGElement, React.DetailsHTMLAttributes<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
        ref={ref}
      >
        <path
          d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
)

CloseIcon.displayName = 'CloseIcon'
