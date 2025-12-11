import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'AI/ML', 'Web Platform', 'E-Commerce', 'International'];

const projects = [
  {
    id: 1,
    title: 'Ashielder',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop',
    techStack: ['Python', 'TensorFlow', 'NLP', 'React', 'Node.js', 'MongoDB'],
    description: 'AI-powered phishing and scam detection system that protects users from malicious online threats.',
    fullDescription: 'Ashielder is an advanced AI-powered security system designed to detect and prevent phishing attacks, scam messages, and fraudulent online activities. Using machine learning and natural language processing, it analyzes communication patterns and identifies potential threats in real-time.',
    outcome: 'Actively protecting users from evolving cyber threats with intelligent detection algorithms.',
  },
  {
    id: 2,
    title: 'Intelvia',
    category: 'Web Platform',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop',
    techStack: ['React', 'Node.js', 'WebRTC', 'PostgreSQL', 'AWS', 'PWA'],
    description: 'Low-internet-learning platform enabling quality education access in bandwidth-constrained environments.',
    fullDescription: 'Intelvia is an innovative educational platform optimized for low-bandwidth environments. It enables students and educators to access quality learning materials and interactive features even with limited internet connectivity, bridging the digital divide in education.',
    outcome: 'Enabling accessible education for learners in underserved regions with limited connectivity.',
  },
  {
    id: 3,
    title: 'Jewellery E-Commerce',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=450&fit=crop',
    techStack: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS', 'Prisma', 'Vercel'],
    description: 'Premium jewellery e-commerce platform with secure transactions and elegant user experience.',
    fullDescription: 'A sophisticated e-commerce platform designed specifically for the jewellery industry. Features include high-quality product galleries, secure payment processing, inventory management, and a premium shopping experience tailored to luxury retail.',
    outcome: 'Delivering a premium online shopping experience for jewellery enthusiasts.',
  },
  {
    id: 4,
    title: 'Farmify',
    category: 'Web Platform',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=450&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB', 'Maps API', 'Payment Gateway', 'PWA'],
    description: 'Farmer-to-buyer marketplace connecting agricultural producers directly with consumers.',
    fullDescription: 'Farmify is a digital marketplace that eliminates intermediaries between farmers and consumers. The platform enables farmers to list their produce, set fair prices, and connect directly with buyers, ensuring better earnings for farmers and fresher products for consumers.',
    outcome: 'Empowering farmers with direct market access and fair pricing.',
  },
  {
    id: 5,
    title: 'Valencia University Projects',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=450&fit=crop',
    techStack: ['Python', 'Data Science', 'AI/ML', 'Cloud Computing', 'Research', 'Collaboration'],
    description: '3 international collaborative projects with Valencia University, Spain focusing on innovative technology solutions.',
    fullDescription: 'A series of three collaborative projects undertaken with Valencia University, Spain. These projects span various domains including AI research, data science applications, and innovative technology solutions, representing significant international collaboration in cutting-edge technology development.',
    outcome: 'Successful international collaboration resulting in innovative technological solutions.',
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
            description="Explore our portfolio of innovative projects across various domains"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'cyber-card text-muted-foreground hover:text-foreground border-accent/20'
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

          {/* Coming Soon Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-card p-8 text-center mt-12 border-accent/20"
          >
            <p className="text-muted-foreground">
              Case studies with detailed documentation will be published soon. Currently showcasing active and upcoming builds.
            </p>
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
              className="cyber-card max-w-3xl w-full max-h-[90vh] overflow-y-auto border-accent/30"
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
                  className="absolute top-4 right-4 w-10 h-10 rounded-full cyber-card flex items-center justify-center text-foreground hover:text-primary transition-colors border-accent/30"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h2 className="font-heading font-bold text-2xl md:text-3xl mt-2 mb-4 text-foreground">
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.fullDescription}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-heading font-semibold mb-3 text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="cyber-card p-4 mb-6 border-secondary/30">
                  <h4 className="font-heading font-semibold mb-2 text-secondary">Impact</h4>
                  <p className="text-foreground/80">{selectedProject.outcome}</p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    Discuss Similar Project <ArrowRight className="w-4 h-4" />
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
            className="cyber-card p-10 md:p-16 text-center cyber-border-glow"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
              Have a <span className="gradient-text">Project</span> in Mind?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let's discuss how we can bring your vision to life with secure, scalable solutions.
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