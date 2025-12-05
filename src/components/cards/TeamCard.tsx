import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  delay?: number;
}

export const TeamCard = ({
  name,
  role,
  bio,
  image,
  socials,
  delay = 0,
}: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="glass-card p-8 text-center group"
    >
      {/* Avatar */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-32 h-32 mx-auto mb-6"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-rotate-slow opacity-60 blur-md" />
        <img
          src={image}
          alt={name}
          className="relative w-full h-full rounded-full object-cover border-4 border-card"
        />
      </motion.div>

      {/* Name */}
      <h3 className="font-heading font-bold text-xl mb-1 group-hover:gradient-text transition-all duration-300">
        {name}
      </h3>

      {/* Role */}
      <p className="text-primary font-medium mb-4">{role}</p>

      {/* Bio */}
      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
        {bio}
      </p>

      {/* Socials */}
      <div className="flex justify-center gap-3">
        {socials.linkedin && (
          <motion.a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-border-purple transition-all duration-300"
            aria-label={`${name}'s LinkedIn`}
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>
        )}
        {socials.twitter && (
          <motion.a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-secondary hover:neon-border-cyan transition-all duration-300"
            aria-label={`${name}'s Twitter`}
          >
            <Twitter className="w-4 h-4" />
          </motion.a>
        )}
        {socials.github && (
          <motion.a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-accent hover:neon-border-pink transition-all duration-300"
            aria-label={`${name}'s GitHub`}
          >
            <Github className="w-4 h-4" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};
