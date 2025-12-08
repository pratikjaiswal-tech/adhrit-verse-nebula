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
import { CyberBackground } from '@/components/3d/CyberBackground';

const services = [
  {
    id: 'web',
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web solutions built with cutting-edge technologies that deliver exceptional performance and scalability.',
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
      {/* Hero with 3D Background */}
      <section className="section-padding relative overflow-hidden min-h-[50vh] flex items-center">
        <CyberBackground variant="minimal" />
        
        <div className="container-custom relative z-10">
          <SectionHeading
            label="Our Services"
            title={<>Comprehensive <span className="text-tech-blue">Digital Solutions</span></>}
            description="From concept to deployment, we provide end-to-end services that transform your business"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-0 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-steel/50 to-cyber-black pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="space-y-24">
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
                    <div className="w-20 h-20 rounded-2xl bg-tech-blue/10 border border-silver/20 flex items-center justify-center mb-6 cyber-glow">
                      <service.icon className="w-10 h-10 text-tech-blue" />
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
                          <CheckCircle className="w-5 h-5 text-cyber-neon" />
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
                    className={`cyber-glass p-8 border border-silver/20 hover:border-tech-blue/50 transition-all duration-300 ${isEven ? 'lg:order-2' : ''}`}
                  >
                    <h4 className="font-heading font-semibold text-lg mb-6 text-main-text">
                      Technologies We Use
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-lg bg-tech-blue/10 text-tech-blue text-sm font-medium border border-tech-blue/20"
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
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(37,99,235,0.1)_0%,_transparent_70%)]" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="cyber-glass p-10 md:p-16 text-center border border-silver/20"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-main-text">
              Need a <span className="text-tech-blue">Custom Solution</span>?
            </h2>
            <p className="text-muted-text text-lg max-w-2xl mx-auto mb-8">
              Every project is unique. Let's discuss how we can tailor our services to meet your specific requirements.
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
