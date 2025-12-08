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
    description: 'Custom web solutions built with cutting-edge technologies that deliver exceptional performance, security, and scalability for enterprise operations.',
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
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences with enterprise-grade security across all devices.',
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
    description: 'User-centered design that combines aesthetics with functionality to create intuitive, accessible digital experiences.',
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
    title: 'Ethical Hacking & Cybersecurity',
    description: 'Comprehensive security solutions including penetration testing, vulnerability assessments, and security audits to protect your digital infrastructure.',
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
    description: 'Harness artificial intelligence and machine learning to automate processes, enhance decision-making, and gain competitive advantages.',
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
    description: 'Scalable cloud infrastructure and CI/CD pipelines that accelerate development cycles and ensure reliable, secure deployments.',
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

const Services = () => {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container-custom relative">
          <SectionHeading
            label="Our Services"
            title={<>Comprehensive <span className="text-tech-blue">Digital Solutions</span></>}
            description="From concept to deployment, we provide end-to-end services that transform your business with enterprise-grade security"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => {
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
                    <div className="w-16 h-16 rounded-xl bg-tech-blue/10 border border-tech-blue/30 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-tech-blue" />
                    </div>

                    <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-main-text">
                      {service.title}
                    </h2>

                    <p className="text-muted-text text-lg mb-8">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-tech-blue flex-shrink-0" />
                          <span className="text-main-text/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-tech-blue font-medium group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Visual */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className={`cyber-glass-card p-8 ${isEven ? 'lg:order-2' : ''}`}
                  >
                    <h4 className="font-heading font-semibold text-lg mb-6 text-silver">
                      Technologies We Use
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-lg bg-tech-blue/10 border border-tech-blue/30 text-tech-blue text-sm font-medium"
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
            className="cyber-glass-card p-10 md:p-16 text-center"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-main-text">
              Need a <span className="text-tech-blue">Custom Solution</span>?
            </h2>
            <p className="text-muted-text text-lg max-w-2xl mx-auto mb-8">
              Every project is unique. Let's discuss how we can tailor our services to meet your specific security and development requirements.
            </p>
            <Link to="/contact" className="cyber-button inline-flex items-center gap-2">
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