import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  techStack: string[];
  description: string;
  link?: string;
  onClick?: () => void;
}

export const ProjectCard = ({
  title,
  category,
  image,
  techStack,
  description,
  link,
  onClick,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="cyber-card overflow-hidden group cursor-pointer border-accent/20 hover:border-primary/40 hover:cyber-glow transition-all duration-300"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-primary/15 backdrop-blur-sm flex items-center justify-center"
        >
          <span className="px-6 py-3 rounded-lg cyber-card text-foreground font-medium flex items-center gap-2 border border-primary/30">
            View Project <ArrowRight className="w-4 h-4" />
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <span className="text-primary text-sm font-medium uppercase tracking-wider">
          {category}
        </span>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl mt-2 mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md text-xs bg-muted border border-border text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary mt-4 text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Visit Site <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
};
