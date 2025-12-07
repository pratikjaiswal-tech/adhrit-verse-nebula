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
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group"
    >
      <div className="cyber-card p-8 h-full border-accent/20 hover:border-primary/40 hover:cyber-glow transition-all duration-300">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
          <Icon className="w-7 h-7 text-primary" />
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl mb-4 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Link */}
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-accent font-medium group/link hover:text-primary transition-colors"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
