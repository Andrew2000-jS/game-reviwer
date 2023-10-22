'use client'

import React from 'react'
import { Tooltip } from '@nextui-org/react'

interface Props {
  children: React.ReactNode
  text: string
  delay?: number
  closeDelay?: number
}

function ToolTip ({ children, delay = 0, closeDelay = 0, text }: Props) {
  return (
    <Tooltip
      content={text}
      delay={delay}
      closeDelay={closeDelay}
      motionProps={{
        variants: {
          exit: {
            opacity: 0,
            transition: {
              duration: 0.1,
              ease: 'easeIn'
            }
          },
          enter: {
            opacity: 1,
            transition: {
              duration: 0.15,
              ease: 'easeOut'
            }
          }
        }
      }}
    >
        {children}
    </Tooltip>
  )
}

export default ToolTip
