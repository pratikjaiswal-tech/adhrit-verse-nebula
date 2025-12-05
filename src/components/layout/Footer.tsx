import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUpRight
} from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Web Development', path: '/services#web' },
    { name: 'App Development', path: '/services#app' },
    { name: 'UI/UX Design', path: '/services#uiux' },
    { name: 'Cybersecurity', path: '/services#security' },
    { name: 'AI/ML Solutions', path: '/services#aiml' },
    { name: 'Cloud & DevOps', path: '/services#cloud' },
  ],
  company: [
    { name: 'About Us', path: '/team' },
    { name: 'Our Team', path: '/team' },
    { name: 'Projects', path: '/projects' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/adhritverse', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/adhritverse', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/adhritverse', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/adhritverse', label: 'GitHub' },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container-custom section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-2xl">A</span>
              </div>
              <span className="font-heading font-bold text-2xl gradient-text">AdhritVerse</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transforming ideas into digital reality. We craft innovative web solutions 
              that drive growth and deliver exceptional user experiences.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <a 
                href="mailto:hello@adhritverse.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hello@adhritverse.com</span>
              </a>
              <a 
                href="tel:+1234567890" 
                className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-border-purple transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-secondary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AdhritVerse. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with passion for digital excellence
          </p>
        </div>
      </div>
    </footer>
  );
};
