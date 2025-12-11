import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small brands & startups',
    features: [
      'Up to 5 pages website',
      'Responsive design',
      'Basic SEO optimization',
      '1 month support',
      'Source code delivery',
      '3 revision rounds',
    ],
  },
  {
    name: 'Growth',
    description: 'For scaling businesses and evolving platforms',
    features: [
      'Unlimited pages',
      'Custom web application',
      'Advanced SEO & Analytics',
      '3 months support',
      'API integrations',
      'Performance optimization',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large companies and mission-critical systems',
    features: [
      'Full-stack development',
      'Dedicated team',
      '24/7 priority support',
      'Security audit included',
      'Custom AI/ML features',
      'Ongoing maintenance',
    ],
  },
];

const faqs = [
  {
    question: 'How do you determine project pricing?',
    answer: 'We provide custom quotes based on your specific requirements, scope, timeline, and complexity. Contact us for a free consultation and detailed estimate.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes! We offer flexible payment options including milestone-based payments (typically 40% upfront, 30% midway, 30% on completion) and monthly payment plans for larger projects.',
  },
  {
    question: 'What happens after the support period ends?',
    answer: 'After the initial support period, you can opt for our maintenance packages or choose ad-hoc support as needed. We ensure smooth handover and documentation.',
  },
  {
    question: 'Can I upgrade my plan mid-project?',
    answer: 'Absolutely! We understand that requirements can evolve. We can seamlessly upgrade your plan and adjust the scope accordingly.',
  },
  {
    question: 'Do you provide source code ownership?',
    answer: 'Yes, upon project completion and final payment, you receive full ownership of all source code, assets, and documentation.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in React, Next.js, Node.js, Python, AWS, and more. We choose the best technology stack based on your project requirements.',
  },
];

const comparisonFeatures = [
  { name: 'Number of Pages', starter: 'Up to 5', growth: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Custom Design', starter: true, growth: true, enterprise: true },
  { name: 'Responsive Design', starter: true, growth: true, enterprise: true },
  { name: 'SEO Optimization', starter: 'Basic', growth: 'Advanced', enterprise: 'Enterprise' },
  { name: 'API Integrations', starter: false, growth: true, enterprise: true },
  { name: 'Custom Backend', starter: false, growth: true, enterprise: true },
  { name: 'AI/ML Features', starter: false, growth: false, enterprise: true },
  { name: 'Security Audit', starter: false, growth: false, enterprise: true },
  { name: 'Dedicated Team', starter: false, growth: false, enterprise: true },
  { name: 'Support Duration', starter: '1 month', growth: '3 months', enterprise: '12 months' },
  { name: 'Revision Rounds', starter: '3', growth: '5', enterprise: 'Unlimited' },
  { name: 'Priority Support', starter: false, growth: true, enterprise: '24/7' },
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container-custom relative">
          <SectionHeading
            label="Pricing"
            title={<>Transparent <span className="gradient-text">Pricing</span> for Every Need</>}
            description="Tailored solutions that align with your project requirements and budget"
          />

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative ${plan.popular ? 'lg:-mt-4' : ''}`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1.5 rounded-full text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary">
                      Most Popular
                    </span>
                  </div>
                )}

                <div
                  className={`cyber-card p-8 h-full flex flex-col ${
                    plan.popular
                      ? 'cyber-border-glow border-primary/30'
                      : 'border-accent/20 hover:border-primary/30 hover:cyber-glow'
                  } transition-all duration-300`}
                >
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="font-heading font-bold text-2xl mb-2 text-foreground">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <p className="text-muted-foreground text-sm">Custom pricing based on requirements</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'bg-primary/20 border border-primary/30' : 'bg-secondary/15 border border-secondary/25'
                        }`}>
                          <Check className={`w-3 h-3 ${plan.popular ? 'text-primary' : 'text-secondary'}`} />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className={plan.popular ? 'btn-primary text-center' : 'btn-secondary text-center'}
                  >
                    Request a Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            title={<>Feature <span className="gradient-text">Comparison</span></>}
            description="A detailed look at what's included in each plan"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-card overflow-hidden border-accent/20"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 font-heading font-semibold text-foreground">Feature</th>
                    <th className="text-center p-6 font-heading font-semibold text-foreground">Starter</th>
                    <th className="text-center p-6 font-heading font-semibold text-primary">Growth</th>
                    <th className="text-center p-6 font-heading font-semibold text-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr
                      key={feature.name}
                      className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-muted/20' : ''}`}
                    >
                      <td className="p-6 font-medium text-foreground">{feature.name}</td>
                      <td className="p-6 text-center">
                        {typeof feature.starter === 'boolean' ? (
                          feature.starter ? (
                            <Check className="w-5 h-5 text-secondary mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )
                        ) : (
                          <span className="text-muted-foreground">{feature.starter}</span>
                        )}
                      </td>
                      <td className="p-6 text-center bg-primary/5">
                        {typeof feature.growth === 'boolean' ? (
                          feature.growth ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )
                        ) : (
                          <span className="text-primary font-medium">{feature.growth}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? (
                            <Check className="w-5 h-5 text-secondary mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )
                        ) : (
                          <span className="text-secondary font-medium">{feature.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="FAQ"
            title={<>Frequently Asked <span className="gradient-text">Questions</span></>}
            description="Get answers to common questions about our services and pricing"
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="cyber-card overflow-hidden border-accent/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="font-heading font-semibold pr-8 text-foreground">{faq.question}</span>
                  <HelpCircle
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180 text-primary' : 'text-muted-foreground'
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-muted-foreground">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
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
            className="cyber-card p-10 md:p-16 text-center cyber-border-glow"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
              Ready to Get <span className="gradient-text">Started</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and custom quote tailored to your project needs.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;