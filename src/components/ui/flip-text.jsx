import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function FlipText({
  children,
  word,
  className,
  duration = 0.45,
  delayMultiple = 0.02,
  as: Component = 'span',
  disableHover = false,
  ...props
}) {
  const content = children !== undefined ? children : word;

  if (typeof content !== 'string') {
    const Tag = Component;
    return (
      <Tag className={cn('inline-block', className)} {...props}>
        {content}
      </Tag>
    );
  }

  const words = content.trim().split(/\s+/).filter(Boolean);
  let charCounter = 0;
  const Tag = Component;

  return (
    <Tag
      className={cn('inline-block select-none', className)}
      style={{ perspective: 1000 }}
      {...props}
    >
      <span className="inline">
        {words.map((w, wordIndex) => {
          const characters = w.split('');
          const startIdx = charCounter;
          charCounter += characters.length;

          return (
            <WordFlipItem
              key={wordIndex}
              characters={characters}
              isLast={wordIndex === words.length - 1}
              startCharIdx={startIdx}
              duration={duration}
              delayMultiple={delayMultiple}
              disableHover={disableHover}
            />
          );
        })}
      </span>
    </Tag>
  );
}

function WordFlipItem({
  characters,
  isLast,
  startCharIdx,
  duration,
  delayMultiple,
  disableHover = false,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!disableHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!disableHover) {
      setIsHovered(false);
    }
  };

  return (
    <span
      className={cn(
        'inline-block transition-colors duration-200',
        disableHover ? 'cursor-default' : 'cursor-pointer'
      )}
      style={{
        display: 'inline-block',
        whiteSpace: 'nowrap',
        transformStyle: 'preserve-3d',
        perspective: 1000,
        marginRight: isLast ? 0 : '0.32em',
      }}
      onMouseEnter={disableHover ? undefined : handleMouseEnter}
      onMouseLeave={disableHover ? undefined : handleMouseLeave}
    >
      {characters.map((char, charIdx) => {
        const globalIdx = startCharIdx + charIdx;
        return (
          <motion.span
            key={charIdx}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={
              !disableHover && isHovered
                ? {
                    rotateX: [0, 360],
                    y: [0, -4, 0],
                    opacity: 1,
                  }
                : {
                    rotateX: 0,
                    y: 0,
                    opacity: 1,
                  }
            }
            transition={
              !disableHover && isHovered
                ? {
                    duration: 0.45,
                    delay: charIdx * 0.03,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }
                : {
                    duration: 0.5,
                    delay: globalIdx * delayMultiple,
                    ease: [0.2, 0.65, 0.3, 0.9],
                  }
            }
            style={{
              display: 'inline-block',
              transformOrigin: '50% 50%',
              backfaceVisibility: 'visible',
              WebkitBackfaceVisibility: 'visible',
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
}

export default FlipText;
