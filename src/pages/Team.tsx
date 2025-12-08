import { motion } from 'framer-motion';
import { TeamCard } from '@/components/cards/TeamCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Target, Eye, Rocket } from 'lucide-react';
import { CyberBackground } from '@/components/3d/CyberBackground';

const founders = [
  {
    name: 'Alex Chen',
    role: 'CEO & Founder',
    bio: 'Visionary tech leader with 15+ years of experience in digital transformation. Passionate about creating innovative solutions that drive business growth.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    socials: {
      linkedin: 'https://linkedin.com/in/alexchen',
      twitter: 'https://twitter.com/alexchen',
      github: 'https://github.com/alexchen',
    },
  },
  {
    name: 'Sarah Mitchell',
    role: 'Co-Founder & CTO',
    bio: 'Full-stack architect with deep expertise in scalable systems. Led engineering teams at Fortune 500 companies before co-founding AdhritVerse.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    socials: {
      linkedin: 'https://linkedin.com/in/sarahmitchell',
      twitter: 'https://twitter.com/sarahmitchell',
      github: 'https://github.com/sarahmitchell',
    },
  },
];

const team = [
  {
    name: 'David Park',
    role: 'Lead Developer',
    bio: 'Senior full-stack developer specializing in React and Node.js ecosystems.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    socials: {
      linkedin: 'https://linkedin.com/in/davidpark',
      github: 'https://github.com/davidpark',
    },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Director',
    bio: 'Award-winning UI/UX designer with a passion for creating intuitive experiences.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    socials: {
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      twitter: 'https://twitter.com/emilyrodriguez',
    },
  },
  {
    name: 'Michael Zhang',
    role: 'Security Lead',
    bio: 'Certified ethical hacker with expertise in penetration testing and security audits.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    socials: {
      linkedin: 'https://linkedin.com/in/michaelzhang',
      github: 'https://github.com/michaelzhang',
    },
  },
  {
    name: 'Priya Sharma',
    role: 'AI/ML Engineer',
    bio: 'Machine learning specialist focused on NLP and computer vision applications.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
    socials: {
      linkedin: 'https://linkedin.com/in/priyasharma',
      github: 'https://github.com/priyasharma',
    },
  },
];

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower businesses with cutting-edge digital solutions that drive growth, enhance efficiency, and create lasting impact in the digital landscape.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the global leader in digital innovation, setting new standards for excellence in web development, AI integration, and cybersecurity.',
  },
  {
    icon: Rocket,
    title: 'Our Values',
    description: 'Innovation, integrity, and client success drive everything we do. We believe in transparent partnerships and delivering measurable results.',
  },
];

const Team = () => {
  return (
    <main className="pt-24">
      {/* Hero with 3D Background */}
      <section className="section-padding relative overflow-hidden min-h-[50vh] flex items-center">
        <CyberBackground variant="minimal" />
        
        <div className="container-custom relative z-10">
          <SectionHeading
            label="About Us"
            title={<>Meet the <span className="text-tech-blue">Visionaries</span></>}
            description="The passionate team behind AdhritVerse's digital innovations"
          />
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding pt-0 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-steel/30 pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cyber-glass p-8 text-center border border-silver/20 hover:border-tech-blue/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-tech-blue/10 flex items-center justify-center mx-auto mb-6 border border-tech-blue/20">
                  <value.icon className="w-8 h-8 text-tech-blue" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-4 text-main-text">{value.title}</h3>
                <p className="text-muted-text">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.08)_0%,_transparent_70%)]" />
        
        <div className="container-custom relative z-10">
          <SectionHeading
            label="Leadership"
            title={<>Our <span className="text-tech-blue">Founders</span></>}
            description="The visionary leaders driving AdhritVerse's mission forward"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <TeamCard key={founder.name} {...founder} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-steel/30 to-cyber-black pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <SectionHeading
            label="The Team"
            title={<>Expert <span className="text-tech-blue">Professionals</span></>}
            description="A diverse team of specialists committed to excellence"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <TeamCard key={member.name} {...member} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,179,255,0.08)_0%,_transparent_70%)]" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-glass p-10 md:p-16 border border-silver/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '2019', label: 'Founded' },
                { value: '20+', label: 'Team Members' },
                { value: '150+', label: 'Projects Delivered' },
                { value: '15+', label: 'Countries Served' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-heading font-bold text-4xl md:text-5xl text-tech-blue mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-text">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Team;
