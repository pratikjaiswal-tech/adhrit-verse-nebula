import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  link?: string;
}

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0,
  link = '/services'
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="group relative"
    >
      <div className="cyber-card p-8 h-full border-accent/15 hover:border-primary/40 transition-all duration-500 overflow-hidden">
        {/* Scan light sweep on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </div>
        
        {/* Holographic glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        </div>
        
        {/* Internal light reflection */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        
        {/* Icon with holographic effect */}
        <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary/40 transition-all duration-300">
          <Icon className="w-7 h-7 text-primary" />
          {/* Icon glow */}
          <div className="absolute inset-0 rounded-xl bg-primary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Link */}
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-accent font-medium group/link hover:text-primary transition-colors duration-300"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
        
        {/* Edge glow on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
          style={{ 
            boxShadow: 'inset 0 0 20px hsl(217 91% 53% / 0.1), 0 0 15px hsl(197 100% 50% / 0.1)' 
          }} 
        />
      </div>
    </motion.div>
  );
};