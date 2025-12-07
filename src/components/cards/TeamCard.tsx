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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="cyber-card p-8 text-center group border-accent/20 hover:border-primary/30 hover:cyber-glow transition-all duration-300"
    >
      {/* Avatar */}
      <div className="relative w-28 h-28 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full border-2 border-accent/30 group-hover:border-primary/50 transition-colors" />
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
        <img
          src={image}
          alt={name}
          className="relative w-full h-full rounded-full object-cover border-2 border-card"
        />
      </div>

      {/* Name */}
      <h3 className="font-heading font-bold text-xl mb-1 text-foreground group-hover:text-primary transition-colors">
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
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg cyber-card flex items-center justify-center text-accent hover:text-primary hover:cyber-glow transition-all duration-300 border border-accent/20"
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
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg cyber-card flex items-center justify-center text-accent hover:text-secondary hover:cyber-glow-secondary transition-all duration-300 border border-accent/20"
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
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg cyber-card flex items-center justify-center text-accent hover:text-foreground hover:cyber-glow transition-all duration-300 border border-accent/20"
            aria-label={`${name}'s GitHub`}
          >
            <Github className="w-4 h-4" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};
