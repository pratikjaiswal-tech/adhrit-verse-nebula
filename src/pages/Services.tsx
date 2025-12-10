import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Shield, 
  Brain, 
  Cloud,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'web',
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web solutions built with cutting-edge technologies that deliver exceptional performance and scalability.',
    color: 'purple',
    features: [
      'Custom website development',
      'E-commerce solutions',
      'Progressive Web Apps (PWA)',
      'API development & integration',
      'Content Management Systems',
      'Performance optimization',
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'app',
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    color: 'cyan',
    features: [
      'iOS native development',
      'Android native development',
      'Cross-platform solutions',
      'App Store optimization',
      'Push notifications',
      'Offline functionality',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify'],
  },
  {
    id: 'uiux',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality to create memorable digital experiences.',
    color: 'pink',
    features: [
      'User research & analysis',
      'Wireframing & prototyping',
      'Visual design systems',
      'Interaction design',
      'Usability testing',
      'Design system creation',
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Ethical hacking, penetration testing, and security audits to protect your digital assets from evolving threats.',
    color: 'purple',
    features: [
      'Penetration testing',
      'Vulnerability assessment',
      'Security audits',
      'Incident response',
      'Compliance consulting',
      'Security training',
    ],
    technologies: ['OWASP', 'Burp Suite', 'Metasploit', 'Nessus', 'Wireshark', 'Kali Linux'],
  },
  {
    id: 'aiml',
    icon: Brain,
    title: 'AI/ML Integrations',
    description: 'Harness the power of artificial intelligence to automate processes and gain competitive advantages.',
    color: 'cyan',
    features: [
      'Machine learning models',
      'Natural language processing',
      'Computer vision',
      'Predictive analytics',
      'Chatbot development',
      'Recommendation systems',
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'LangChain', 'Python'],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and CI/CD pipelines that accelerate your development and deployment cycles.',
    color: 'pink',
    features: [
      'Cloud migration',
      'Infrastructure as Code',
      'CI/CD pipelines',
      'Container orchestration',
      'Monitoring & logging',
      'Cost optimization',
    ],
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
  },
];

const colorStyles = {
  purple: {
    iconBg: 'from-primary/20 to-primary/5',
    iconColor: 'text-primary',
    tagBg: 'bg-primary/10 text-primary',
    glow: 'neon-border-purple',
    border: 'border-primary/20',
  },
  cyan: {
    iconBg: 'from-secondary/20 to-secondary/5',
    iconColor: 'text-secondary',
    tagBg: 'bg-secondary/10 text-secondary',
    glow: 'neon-border-cyan',
    border: 'border-secondary/20',
  },
  pink: {
    iconBg: 'from-accent/20 to-accent/5',
    iconColor: 'text-accent',
    tagBg: 'bg-accent/10 text-accent',
    glow: 'neon-border-pink',
    border: 'border-accent/20',
  },
};

const Services = () => {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container-custom relative">
          <SectionHeading
            label="Our Services"
            title={<>Comprehensive <span className="gradient-text">Digital Solutions</span></>}
            description="From concept to deployment, we provide end-to-end services that transform your business"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => {
              const styles = colorStyles[service.color as keyof typeof colorStyles];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${styles.iconBg} flex items-center justify-center mb-6`}
                    >
                      <service.icon className={`w-10 h-10 ${styles.iconColor}`} />
                    </motion.div>

                    <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                      {service.title}
                    </h2>

                    <p className="text-muted-foreground text-lg mb-8">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className={`w-5 h-5 ${styles.iconColor}`} />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-2 ${styles.iconColor} font-medium group`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Visual */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`glass-card p-8 ${styles.glow} ${isEven ? 'lg:order-2' : ''}`}
                  >
                    <h4 className="font-heading font-semibold text-lg mb-6">
                      Technologies We Use
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-4 py-2 rounded-lg ${styles.tagBg} text-sm font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16 text-center neon-border-purple"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Need a <span className="gradient-text">Custom Solution</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Every project is unique. Let's discuss how we can tailor our services to meet your specific requirements.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
