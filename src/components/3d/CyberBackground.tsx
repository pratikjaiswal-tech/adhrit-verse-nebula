import { motion } from 'framer-motion';

// Global cyber background with subtle effects
export const CyberBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-[0.08]" />
      
      {/* Encrypted data texture effect */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' font-family='monospace' font-size='8' fill='%232563EB'%3E01%3C/text%3E%3Ctext x='30' y='40' font-family='monospace' font-size='8' fill='%2300B3FF'%3E10%3C/text%3E%3Ctext x='45' y='15' font-family='monospace' font-size='8' fill='%23B8C7D6'%3E11%3C/text%3E%3C/svg%3E")`,
        }} 
      />
      
      {/* Slow drifting particles */}
      <motion.div 
        className="absolute w-2 h-2 rounded-full bg-primary/30 blur-sm"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ left: '20%', top: '30%' }}
      />
      <motion.div 
        className="absolute w-1.5 h-1.5 rounded-full bg-secondary/25 blur-sm"
        animate={{
          x: [0, -80, -40, 0],
          y: [0, 80, 40, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ right: '25%', top: '50%' }}
      />
      <motion.div 
        className="absolute w-1 h-1 rounded-full bg-accent/20 blur-sm"
        animate={{
          x: [0, 60, 30, 0],
          y: [0, -60, -30, 0],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ left: '60%', bottom: '30%' }}
      />
      
      {/* Faint light rays */}
      <div className="absolute top-0 left-[15%] w-px h-[40%] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
      <div className="absolute top-0 right-[20%] w-px h-[35%] bg-gradient-to-b from-secondary/8 via-secondary/3 to-transparent" />
      <div className="absolute top-0 left-[45%] w-px h-[30%] bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
    </div>
  );
};