'use client';

import { useRef } from 'react';
import { LazyMotion, domAnimation, m, useScroll, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Wraps children with a smooth parallax vertical offset on scroll.
 * Uses LazyMotion + m for smaller bundle size (~30kb saved).
 */
export function ParallaxScroll({ children, speed = -0.2, className = '' }) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${shouldReduceMotion ? 0 : speed * 100}%`]);

  return (
    <LazyMotion features={domAnimation}>
      <div ref={ref} className={className} style={{ position: 'relative', overflow: 'hidden' }}>
        <m.div style={{ y }}>
          {children}
        </m.div>
      </div>
    </LazyMotion>
  );
}

/**
 * Fades + slides in on scroll (one-shot reveal).
 * Uses LazyMotion + m for smaller bundle size.
 */
export function FadeInOnScroll({ children, delay = 0, direction = 'up', className = '' }) {
  const shouldReduceMotion = useReducedMotion();
  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };
  const initialOffset = directionMap[direction] || directionMap.up;
  const initial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, ...initialOffset };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial={initial}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

/**
 * Staggers children with cascading fade-in on scroll.
 * Uses LazyMotion + m for smaller bundle size.
 */
export function StaggerContainer({ children, className = '', staggerDelay = 0.12 }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: staggerDelay } },
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

/**
 * Individual item for use inside StaggerContainer.
 * Uses LazyMotion + m for smaller bundle size.
 */
export function StaggerItem({ children, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
    >
      {children}
    </m.div>
  );
}
