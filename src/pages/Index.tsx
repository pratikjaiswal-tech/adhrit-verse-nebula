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
import { PricingCard } from '@/components/cards/PricingCard';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useState } from 'react';
import logo from '@/assets/adhritverse-logo.png';

const services = [
  { icon: Code2, title: 'Web Development', description: 'Custom web solutions built with cutting-edge technologies for exceptional performance and security.' },
  { icon: Smartphone, title: 'App Development', description: 'Native and cross-platform mobile applications with enterprise-grade security.' },
  { icon: Palette, title: 'UI/UX Design', description: 'User-centered design combining aesthetics with functionality for professional experiences.' },
  { icon: Shield, title: 'Cybersecurity', description: 'Ethical hacking, penetration testing, and security audits to protect your digital assets.' },
  { icon: Brain, title: 'AI/ML Integrations', description: 'Harness artificial intelligence to automate processes and gain competitive advantages.' },
  { icon: Cloud, title: 'Cloud & DevOps', description: 'Scalable cloud infrastructure and CI/CD pipelines for rapid deployment cycles.' },
];

const pricingPlans = [
  { name: 'Starter', price: { monthly: 2999, yearly: 2499 }, description: 'Perfect for startups', features: ['Up to 5 pages website', 'Responsive design', 'Basic SEO optimization', '1 month support', 'Source code delivery', '3 revision rounds'] },
  { name: 'Growth', price: { monthly: 5999, yearly: 4999 }, description: 'Ideal for growing businesses', features: ['Unlimited pages', 'Custom web application', 'Advanced SEO & Analytics', '3 months support', 'API integrations', 'Performance optimization'], popular: true },
  { name: 'Enterprise', price: { monthly: 12999, yearly: 10999 }, description: 'For large-scale operations', features: ['Full-stack development', 'Dedicated team', '24/7 priority support', 'Security audit included', 'Custom AI/ML features', 'Ongoing maintenance'] },
];

const featuredProjects = [
  { title: 'FinTech Dashboard', category: 'Web Application', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop', techStack: ['React', 'TypeScript', 'D3.js', 'Node.js'], description: 'Real-time financial analytics platform with advanced data visualization.' },
  { title: 'E-Commerce Platform', category: 'Full Stack', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop', techStack: ['Next.js', 'Stripe', 'PostgreSQL', 'AWS'], description: 'Scalable e-commerce with integrated payment processing.' },
  { title: 'Healthcare App', category: 'Mobile Development', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop', techStack: ['React Native', 'Firebase', 'HIPAA', 'ML'], description: 'HIPAA-compliant healthcare application with telemedicine features.' },
];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '24/7', label: 'Security Monitoring' },
];

const Index = () => {
  const [isYearly, setIsYearly] = useState(false);

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
              Enterprise-grade digital solutions with cutting-edge security. From web applications 
              to AI integrations, we deliver innovation that protects and accelerates your business.
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

      {/* Pricing Highlights */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container-custom relative">
          <SectionHeading label="Pricing" title={<>Transparent <span className="gradient-text">Pricing</span></>} description="Choose the perfect plan for your project needs" />
          <div className="flex justify-center mb-12">
            <div className="cyber-card p-1.5 inline-flex gap-1 border-accent/20">
              <button onClick={() => setIsYearly(false)} className={`px-6 py-2 rounded-lg font-medium transition-all ${!isYearly ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>Monthly</button>
              <button onClick={() => setIsYearly(true)} className={`px-6 py-2 rounded-lg font-medium transition-all ${isYearly ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>Yearly <span className="ml-2 text-xs text-secondary">Save 15%</span></button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={plan.name} {...plan} isYearly={isYearly} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-gradient-to-b from-background to-card/30">
        <div className="container-custom">
          <SectionHeading label="Portfolio" title={<>Featured <span className="gradient-text">Projects</span></>} description="Explore our recent enterprise solutions" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="cyber-card p-10 md:p-16 text-center cyber-border-glow">
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
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
