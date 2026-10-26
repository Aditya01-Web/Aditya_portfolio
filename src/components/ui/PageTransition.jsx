import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function PageTransition({
  children,
  className = '',
  delay = 0,
  duration = 0.65,
  y = 32,
  scale = 0.985,
  as: Component = 'div',
  ...props
}) {
  const MotionComponent =
    typeof Component === 'string' && motion[Component]
      ? motion[Component]
      : motion.div;

  return (
    <MotionComponent
      initial={{
        opacity: 0,
        y,
        scale,
        filter: 'blur(4px)',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{
        once: true,
        amount: 0.1,
        margin: '0px 0px -40px 0px',
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn('page-transition-wrapper', className)}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export default PageTransition;
