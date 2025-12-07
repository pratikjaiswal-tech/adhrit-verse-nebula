import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'AI/ML', 'E-Commerce'];

const projects = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    techStack: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL', 'AWS'],
    description: 'Real-time financial analytics platform with advanced data visualization and reporting capabilities.',
    fullDescription: 'A comprehensive financial analytics dashboard built for a leading investment firm. Features real-time market data integration, customizable charts, portfolio tracking, and AI-powered insights. The platform processes millions of data points daily while maintaining sub-second response times.',
    outcome: 'Increased trading efficiency by 40% and reduced report generation time from hours to minutes.',
    link: 'https://example.com/fintech',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
    techStack: ['Next.js', 'Stripe', 'PostgreSQL', 'AWS', 'Redis', 'Elasticsearch'],
    description: 'Scalable e-commerce solution with integrated payment processing and inventory management.',
    fullDescription: 'End-to-end e-commerce platform supporting multi-vendor operations. Includes advanced inventory management, real-time order tracking, and AI-powered product recommendations. Built to handle millions of concurrent users during peak sales events.',
    outcome: 'Generated $10M+ in first-year sales with 99.99% uptime during Black Friday.',
    link: 'https://example.com/ecommerce',
  },
  {
    id: 3,
    title: 'Healthcare App',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop',
    techStack: ['React Native', 'Firebase', 'TensorFlow', 'Node.js', 'MongoDB'],
    description: 'HIPAA-compliant healthcare application with telemedicine features and AI diagnostics.',
    fullDescription: 'A mobile-first healthcare platform enabling virtual consultations, appointment scheduling, and AI-assisted preliminary diagnostics. Fully HIPAA compliant with end-to-end encryption and secure data storage.',
    outcome: 'Served 50,000+ patients with 95% user satisfaction rating.',
    link: 'https://example.com/healthcare',
  },
  {
    id: 4,
    title: 'AI Content Generator',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    techStack: ['Python', 'OpenAI', 'LangChain', 'FastAPI', 'React', 'Redis'],
    description: 'Enterprise AI platform for automated content generation and brand voice consistency.',
    fullDescription: 'An AI-powered content generation platform that learns brand voice and creates consistent, on-brand content across multiple channels. Includes workflow automation, content scheduling, and performance analytics.',
    outcome: 'Reduced content production time by 70% while maintaining brand consistency.',
    link: 'https://example.com/ai-content',
  },
  {
    id: 5,
    title: 'SaaS Analytics Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    techStack: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Docker', 'Kubernetes'],
    description: 'Multi-tenant analytics SaaS with customizable dashboards and automated reporting.',
    fullDescription: 'A white-label analytics platform enabling businesses to track KPIs, generate reports, and gain actionable insights. Features role-based access control, custom dashboard builder, and automated alert systems.',
    outcome: 'Acquired by 200+ enterprise clients within first year of launch.',
    link: 'https://example.com/saas',
  },
  {
    id: 6,
    title: 'Banking Mobile App',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=450&fit=crop',
    techStack: ['Flutter', 'Firebase', 'Node.js', 'PostgreSQL', 'Plaid API'],
    description: 'Secure digital banking experience with biometric authentication and instant transfers.',
    fullDescription: 'A next-generation mobile banking application featuring biometric login, instant P2P transfers, spending analytics, and investment tracking. Built with bank-grade security and compliance frameworks.',
    outcome: '500K+ downloads with 4.8-star app store rating.',
    link: 'https://example.com/banking',
  },
  {
    id: 7,
    title: 'Travel Booking Platform',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=450&fit=crop',
    techStack: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'Amadeus API', 'Stripe'],
    description: 'Comprehensive travel booking system with AI-powered recommendations.',
    fullDescription: 'An all-in-one travel platform integrating flights, hotels, car rentals, and activities. Features AI-powered itinerary planning, price alerts, and loyalty program management.',
    outcome: 'Processed $50M+ in bookings with industry-leading conversion rates.',
    link: 'https://example.com/travel',
  },
  {
    id: 8,
    title: 'Fitness App UI/UX',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=450&fit=crop',
    techStack: ['Figma', 'Adobe XD', 'Principle', 'Framer', 'User Research'],
    description: 'Complete redesign of a fitness application focused on engagement and retention.',
    fullDescription: 'A comprehensive UI/UX overhaul for a leading fitness app. Included user research, competitive analysis, information architecture redesign, and implementation of gamification elements to boost engagement.',
    outcome: 'Increased daily active users by 60% and reduced churn by 35%.',
    link: 'https://example.com/fitness',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container-custom relative">
          <SectionHeading
            label="Portfolio"
            title={<>Our <span className="gradient-text">Work</span> Speaks</>}
            description="Explore our portfolio of successful projects across various industries"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'glass-card text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    {...project}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground hover:text-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h2 className="font-heading font-bold text-2xl md:text-3xl mt-2 mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.fullDescription}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-heading font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="glass-card p-4 mb-6 neon-border-cyan">
                  <h4 className="font-heading font-semibold mb-2 text-secondary">Key Outcome</h4>
                  <p className="text-foreground/80">{selectedProject.outcome}</p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center justify-center gap-2"
                    >
                      Visit Project <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <Link
                    to="/contact"
                    className="btn-secondary inline-flex items-center justify-center gap-2"
                  >
                    Start Similar Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Have a <span className="gradient-text">Project</span> in Mind?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let's discuss how we can bring your vision to life with our expertise and passion for excellence.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
