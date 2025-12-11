import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Shield, 
  Brain, 
  Cloud,
  ArrowRight,
  Lock,
  Zap
} from 'lucide-react';
import { HeroScene } from '@/components/3d/HeroScene';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import logo from '@/assets/adhritverse-logo.png';

const services = [
  { icon: Code2, title: 'Web Development', description: 'High-performance, responsive, and SEO-optimized websites engineered for speed, security, and scalability.' },
  { icon: Smartphone, title: 'App Development', description: 'Cross-platform mobile and web apps focused on performance, reliability, and future growth.' },
  { icon: Palette, title: 'UI/UX Design', description: 'User-centric interface design that improves clarity, engagement, and conversions.' },
  { icon: Shield, title: 'Ethical Hacking & Cybersecurity', description: 'Vulnerability assessments, penetration testing, and secure architecture design for robust protection.' },
  { icon: Brain, title: 'AI / ML Integrations', description: 'Intelligent automation, predictive analytics, and AI-powered user experiences.' },
  { icon: Cloud, title: 'Cloud & DevOps', description: 'Scalable infrastructure, CI/CD pipelines, and secure cloud deployment solutions.' },
];

const featuredProjects = [
  { title: 'Ashielder', category: 'AI/ML Security', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop', techStack: ['Python', 'TensorFlow', 'NLP', 'React'], description: 'AI-powered phishing and scam detection system protecting users from cyber threats.' },
  { title: 'Intelvia', category: 'EdTech Platform', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop', techStack: ['React', 'Node.js', 'WebRTC', 'PWA'], description: 'Low-internet-learning platform enabling quality education in bandwidth-constrained environments.' },
  { title: 'Farmify', category: 'Marketplace', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=450&fit=crop', techStack: ['React', 'Node.js', 'MongoDB', 'Maps API'], description: 'Farmer-to-buyer marketplace connecting agricultural producers directly with consumers.' },
];

const stats = [
  { value: '15+', label: 'Hackathons' },
  { value: '8', label: 'Wins' },
  { value: '3', label: 'International Projects' },
  { value: '24/7', label: 'Security Focus' },
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroScene />
        
        {/* Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img src={logo} alt="" className="w-96 h-96 object-contain opacity-[0.05]" />
        </div>
        
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg cyber-card text-primary text-sm font-medium mb-8 border border-primary/20"
            >
              <Lock className="w-4 h-4" />
              Cyber & Web Innovation Consultancy
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              <span className="text-accent">AdhritVerse</span>
              <br />
              <span className="gradient-text">Secure, Scalable,</span>
              <br />
              <span className="text-foreground">Future-ready</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
            >
              AdhritVerse is a premium cyber and web innovation consultancy delivering secure, 
              scalable, and high-performance digital solutions for startups and enterprises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                Get Consultation
              </Link>
              <Link to="/projects" className="btn-secondary inline-flex items-center justify-center gap-2">
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="cyber-card p-6 text-center border-accent/20">
                <div className="font-heading font-bold text-3xl md:text-4xl gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gradient-to-b from-background to-card/30">
        <div className="container-custom">
          <SectionHeading label="Our Services" title={<>What We <span className="gradient-text">Deliver</span></>} description="Comprehensive digital solutions with enterprise-grade security" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.08} />
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Explore All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading label="Portfolio" title={<>Featured <span className="gradient-text">Projects</span></>} description="Explore our innovative solutions across various domains" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="cyber-card p-10 md:p-16 text-center cyber-border-glow">
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
              Ready to <span className="gradient-text">Secure</span> Your Digital Future?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Let's collaborate to build secure, scalable solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" /> Start Your Project
              </Link>
              <Link to="/pricing" className="btn-secondary inline-flex items-center justify-center gap-2">View Pricing</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;