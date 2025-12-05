import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: 'purple' | 'cyan' | 'pink';
  delay?: number;
  link?: string;
}

const colorClasses = {
  purple: {
    glow: 'neon-border-purple',
    iconBg: 'from-primary/20 to-primary/5',
    iconColor: 'text-primary',
    hoverBorder: 'hover:border-primary/50',
  },
  cyan: {
    glow: 'neon-border-cyan',
    iconBg: 'from-secondary/20 to-secondary/5',
    iconColor: 'text-secondary',
    hoverBorder: 'hover:border-secondary/50',
  },
  pink: {
    glow: 'neon-border-pink',
    iconBg: 'from-accent/20 to-accent/5',
    iconColor: 'text-accent',
    hoverBorder: 'hover:border-accent/50',
  },
};

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color, 
  delay = 0,
  link = '/services'
}: ServiceCardProps) => {
  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group"
    >
      <div className={`glass-card p-8 h-full ${colors.hoverBorder} transition-all duration-500 group-hover:${colors.glow}`}>
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.iconBg} flex items-center justify-center mb-6`}
        >
          <Icon className={`w-8 h-8 ${colors.iconColor}`} />
        </motion.div>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl mb-4 group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Link */}
        <Link
          to={link}
          className={`inline-flex items-center gap-2 ${colors.iconColor} font-medium group/link`}
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
