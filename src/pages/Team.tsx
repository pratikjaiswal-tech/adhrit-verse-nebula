import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Target, Eye, Rocket, Linkedin, Mail, Phone, Award, GraduationCap, Briefcase } from 'lucide-react';

const founder = {
  name: 'Hritik Jaiswal',
  role: 'Founder & CEO',
  bio: 'Hritik Jaiswal is the Founder & CEO of AdhritVerse, a cybersecurity-driven technology entrepreneur and full-stack developer. With strong experience across web engineering, app development, AI/ML, and cybersecurity, he builds secure, scalable, and modern digital solutions. He has led and contributed to multiple national and international projects, including collaborations with Valencia University, Spain, and has won over 8 hackathons with more than 15 total participations.',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  socials: {
    linkedin: 'https://www.linkedin.com/in/hritik-jaiswal-piemr',
    email: 'hritikjaiswalgdg@gmail.com',
    phone: '8462802086',
  },
  experience: [
    { role: 'Frontend Intern', company: 'KlarviaTech, IIT Madras', period: '2025–Present' },
    { role: 'Data Science Intern', company: 'Sabudh Foundation', period: '2025–Present' },
    { role: 'Software Development Intern', company: 'UnizzTech', period: '2024–2025' },
  ],
  education: 'B.Tech CSE (IoT, Cybersecurity & Blockchain), PIEMR, RGPV (2023–2027)',
  achievements: [
    'Winner: VoidHacks 7.0',
    'Finalist: Google Solution Challenge 2025',
    '15+ Hackathons, 8 Wins',
    'Sincere Student Award – PIEMR',
    '3 Gold, 4 Silver, 1 Bronze (Tech/Sports)',
    '3 International Projects – Valencia University',
  ],
};

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To deliver secure, scalable, and high-performance digital solutions that empower startups and enterprises to thrive in the digital age.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To become a trusted global leader in cybersecurity-driven web and app development, setting new standards for innovation and security.',
  },
  {
    icon: Rocket,
    title: 'Our Values',
    description: 'Security-first thinking, continuous innovation, transparent partnerships, and unwavering commitment to client success drive everything we build.',
  },
];

const Team = () => {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container-custom relative">
          <SectionHeading
            label="About Us"
            title={<>Meet the <span className="gradient-text">Founder</span></>}
            description="The visionary behind AdhritVerse's cyber and web innovations"
          />
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card p-8 text-center border-accent/20 hover:border-primary/30 hover:cyber-glow transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-card p-8 md:p-12 cyber-border-glow"
          >
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Profile Image & Quick Info */}
              <div className="lg:col-span-1">
                <div className="relative mb-6">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-accent/30">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Cyber glow overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
                </div>
                
                <h2 className="font-heading font-bold text-2xl text-foreground mb-1">{founder.name}</h2>
                <p className="text-primary font-medium mb-6">{founder.role}</p>

                {/* Contact Links */}
                <div className="space-y-3">
                  <a
                    href={founder.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a
                    href={`mailto:${founder.socials.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{founder.socials.email}</span>
                  </a>
                  <a
                    href={`tel:+91${founder.socials.phone}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 {founder.socials.phone}</span>
                  </a>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <p className="text-foreground/90 text-lg leading-relaxed">{founder.bio}</p>
                </div>

                {/* Experience */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h3 className="font-heading font-semibold text-lg text-foreground">Experience</h3>
                  </div>
                  <div className="space-y-3">
                    {founder.experience.map((exp, index) => (
                      <div key={index} className="cyber-card p-4 border-accent/20">
                        <p className="font-medium text-foreground">{exp.role}</p>
                        <p className="text-muted-foreground text-sm">{exp.company} • {exp.period}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <h3 className="font-heading font-semibold text-lg text-foreground">Education</h3>
                  </div>
                  <div className="cyber-card p-4 border-accent/20">
                    <p className="text-foreground">{founder.education}</p>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    <h3 className="font-heading font-semibold text-lg text-foreground">Achievements</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {founder.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="cyber-card p-3 border-accent/20 text-sm text-foreground/80"
                      >
                        {achievement}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Co-Founder Section */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-card p-8 text-center border-accent/20"
          >
            <h3 className="font-heading font-bold text-xl mb-2 text-foreground">Co-Founder</h3>
            <p className="text-muted-foreground">Coming Soon</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-card p-10 md:p-16 border-accent/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '2024', label: 'Founded' },
                { value: '15+', label: 'Hackathons' },
                { value: '8', label: 'Wins' },
                { value: '3', label: 'International Projects' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-heading font-bold text-4xl md:text-5xl gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
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