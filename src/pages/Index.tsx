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
  Sparkles,
  Zap,
  Trophy
} from 'lucide-react';
import { HeroScene } from '@/components/3d/HeroScene';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { PricingCard } from '@/components/cards/PricingCard';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useState } from 'react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web solutions built with cutting-edge technologies. From responsive websites to complex web applications.',
    color: 'purple' as const,
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    color: 'cyan' as const,
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality to create memorable digital experiences.',
    color: 'pink' as const,
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Ethical hacking, penetration testing, and security audits to protect your digital assets from threats.',
    color: 'purple' as const,
  },
  {
    icon: Brain,
    title: 'AI/ML Integrations',
    description: 'Harness the power of artificial intelligence to automate processes and gain competitive advantages.',
    color: 'cyan' as const,
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and CI/CD pipelines that accelerate your development and deployment.',
    color: 'pink' as const,
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: { monthly: 2999, yearly: 2499 },
    description: 'Perfect for startups and small projects',
    features: [
      'Up to 5 pages website',
      'Responsive design',
      'Basic SEO optimization',
      '1 month support',
      'Source code delivery',
      '3 revision rounds',
    ],
  },
  {
    name: 'Growth',
    price: { monthly: 5999, yearly: 4999 },
    description: 'Ideal for growing businesses',
    features: [
      'Unlimited pages',
      'Custom web application',
      'Advanced SEO & Analytics',
      '3 months support',
      'API integrations',
      'Performance optimization',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 12999, yearly: 10999 },
    description: 'For large-scale operations',
    features: [
      'Full-stack development',
      'Dedicated team',
      '24/7 priority support',
      'Security audit included',
      'Custom AI/ML features',
      'Ongoing maintenance',
    ],
  },
];

const featuredProjects = [
  {
    title: 'FinTech Dashboard',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    techStack: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    description: 'Real-time financial analytics platform with advanced data visualization and reporting capabilities.',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
    techStack: ['Next.js', 'Stripe', 'PostgreSQL', 'AWS'],
    description: 'Scalable e-commerce solution with integrated payment processing and inventory management.',
  },
  {
    title: 'Healthcare App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop',
    techStack: ['React Native', 'Firebase', 'HIPAA', 'ML'],
    description: 'HIPAA-compliant healthcare application with telemedicine features and AI diagnostics.',
  },
];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
];

const Index = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroScene />
        
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Web Innovation Consultancy
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              <span className="gradient-text">AdhritVerse</span>
              <br />
              <span className="text-foreground">Crafting Digital</span>
              <br />
              <span className="gradient-text-secondary">Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
            >
              We transform visionary ideas into powerful digital solutions. From stunning web experiences 
              to secure enterprise systems, we deliver innovation that drives growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="glass-card p-6 text-center">
                <div className="font-heading font-bold text-3xl md:text-4xl gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gradient-to-b from-background to-card/50">
        <div className="container-custom">
          <SectionHeading
            label="Our Services"
            title={<>What We <span className="gradient-text">Deliver</span></>}
            description="Comprehensive digital solutions tailored to your business needs"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Explore All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing Highlights */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container-custom relative">
          <SectionHeading
            label="Pricing"
            title={<>Transparent <span className="gradient-text">Pricing</span></>}
            description="Choose the perfect plan for your project needs"
          />

          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div className="glass-card p-1.5 inline-flex gap-1">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  !isYearly ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  isYearly ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs text-secondary">Save 15%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                {...plan}
                isYearly={isYearly}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-gradient-to-b from-background to-card/30">
        <div className="container-custom">
          <SectionHeading
            label="Portfolio"
            title={<>Featured <span className="gradient-text">Projects</span></>}
            description="Explore some of our recent work"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20 pointer-events-none" />
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16 text-center neon-border-purple"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Trophy className="w-16 h-16 mx-auto mb-6 text-primary" />
            </motion.div>
            
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Digital Presence?
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Let's collaborate to bring your vision to life. Our team is ready to create 
              something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                Start Your Project
              </Link>
              <Link to="/pricing" className="btn-secondary inline-flex items-center justify-center gap-2">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
