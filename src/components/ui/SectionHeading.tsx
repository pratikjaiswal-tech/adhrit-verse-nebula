import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string | ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading = ({
  label,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) => {
  return (
    <div
      className={`${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left'
      } mb-16 ${className}`}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 rounded-full bg-tech-blue/10 border border-tech-blue/30 text-tech-blue text-sm font-medium mb-4"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-main-text"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-text text-lg max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};