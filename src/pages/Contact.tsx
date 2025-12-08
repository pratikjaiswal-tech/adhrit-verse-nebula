import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Github,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { toast } from 'sonner';
import { CyberBackground } from '@/components/3d/CyberBackground';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@adhritverse.com',
    href: 'mailto:hello@adhritverse.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
  },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/adhritverse', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/adhritverse', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/adhritverse', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/adhritverse', label: 'GitHub' },
];

const services = [
  'Web Development',
  'App Development',
  'UI/UX Design',
  'Cybersecurity',
  'AI/ML Integration',
  'Cloud & DevOps',
  'Other',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Message sent successfully! We\'ll get back to you soon.');

    // Reset after animation
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <main className="pt-24">
      {/* Hero with 3D Background */}
      <section className="section-padding relative overflow-hidden min-h-[50vh] flex items-center">
        <CyberBackground variant="minimal" />
        
        <div className="container-custom relative z-10">
          <SectionHeading
            label="Contact Us"
            title={<>Let's Start a <span className="text-tech-blue">Conversation</span></>}
            description="Ready to transform your digital presence? We're here to help you succeed."
          />
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding pt-0 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-steel/30 to-cyber-black pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Info Cards */}
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="cyber-glass p-6 flex items-center gap-4 group hover:border-tech-blue/50 transition-all duration-300 block border border-silver/20"
                >
                  <div className="w-14 h-14 rounded-xl bg-tech-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform border border-tech-blue/20">
                    <info.icon className="w-6 h-6 text-tech-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-text">{info.label}</p>
                    <p className="font-medium text-main-text">{info.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-8"
              >
                <h4 className="font-heading font-semibold text-lg mb-4 text-main-text">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl cyber-glass flex items-center justify-center text-silver hover:text-tech-blue hover:border-tech-blue/50 transition-all duration-300 border border-silver/20"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="cyber-glass p-6 border border-silver/20"
              >
                <h4 className="font-heading font-semibold text-lg mb-4 text-main-text">Business Hours</h4>
                <div className="space-y-2 text-muted-text">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="cyber-glass p-8 md:p-10 border border-silver/20">
                <h3 className="font-heading font-bold text-2xl mb-6 text-main-text">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-main-text">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-navy-steel/50 border border-divider focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all text-main-text placeholder:text-muted-text"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-main-text">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-navy-steel/50 border border-divider focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all text-main-text placeholder:text-muted-text"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2 text-main-text">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-navy-steel/50 border border-divider focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all text-main-text placeholder:text-muted-text"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2 text-main-text">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-navy-steel/50 border border-divider focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all text-main-text"
                      >
                        <option value="" className="bg-navy-steel">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-navy-steel">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2 text-main-text">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-navy-steel/50 border border-divider focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all text-main-text"
                    >
                      <option value="" className="bg-navy-steel">Select budget range</option>
                      <option value="< $5,000" className="bg-navy-steel">Less than $5,000</option>
                      <option value="$5,000 - $10,000" className="bg-navy-steel">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000" className="bg-navy-steel">$10,000 - $25,000</option>
                      <option value="$25,000 - $50,000" className="bg-navy-steel">$25,000 - $50,000</option>
                      <option value="$50,000+" className="bg-navy-steel">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-main-text">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-navy-steel/50 border border-divider focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all resize-none text-main-text placeholder:text-muted-text"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                    className={`w-full cyber-button flex items-center justify-center gap-2 ${
                      isSubmitted ? 'bg-green-500 hover:bg-green-500 border-green-500' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
