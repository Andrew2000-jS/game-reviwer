import React from 'react'
import { motion, type Variants } from 'framer-motion'
import useReveal from '@/hooks/useReveal'

interface Props {
  children: React.ReactNode
  width?: 'fit-content' | '100%'
  variants: Variants
  overflow?: string
}

function Reveal ({ children, width = 'fit-content', variants, overflow }: Props) {
  const { ref, mainControls } = useReveal()

  return (
    (
        <div ref={ref} style={{ position: 'relative', width, overflow }}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.2, delay: 0.25 }}
            >{children}</motion.div>
        </div>
    )
  )
}

export default Reveal
