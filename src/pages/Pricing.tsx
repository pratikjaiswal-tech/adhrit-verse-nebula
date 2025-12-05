import { useState } from 'react';
import { motion } from 'framer-motion';
import { PricingCard } from '@/components/cards/PricingCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Check, HelpCircle } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: { monthly: 2999, yearly: 2499 },
    description: 'Perfect for startups and small projects',
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
    price: { monthly: 5999, yearly: 4999 },
    description: 'Ideal for growing businesses',
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
    price: { monthly: 12999, yearly: 10999 },
    description: 'For large-scale operations',
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
    question: 'What is included in the project timeline?',
    answer: 'Project timelines vary based on scope and complexity. Starter projects typically take 2-4 weeks, Growth projects 4-8 weeks, and Enterprise projects 8-16 weeks or more.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes! We offer flexible payment options including milestone-based payments (typically 40% upfront, 30% midway, 30% on completion) and monthly payment plans for larger projects.',
  },
  {
    question: 'What happens after the support period ends?',
    answer: 'After the initial support period, you can opt for our maintenance packages starting at $499/month, or choose ad-hoc support at hourly rates.',
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
    answer: 'We specialize in modern web technologies including React, Next.js, Node.js, Python, AWS, and more. We choose the best stack for each project.',
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
  const [isYearly, setIsYearly] = useState(false);
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
            description="Choose the perfect plan that aligns with your project requirements and budget"
          />

          {/* Toggle */}
          <div className="flex justify-center mb-16">
            <div className="glass-card p-1.5 inline-flex gap-1">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  !isYearly ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  isYearly ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Yearly Billing
                <span className="ml-2 text-xs text-secondary font-bold">SAVE 15%</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                {...plan}
                isYearly={isYearly}
                delay={index * 0.1}
              />
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
            className="glass-card overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 font-heading font-semibold">Feature</th>
                    <th className="text-center p-6 font-heading font-semibold">Starter</th>
                    <th className="text-center p-6 font-heading font-semibold text-primary">Growth</th>
                    <th className="text-center p-6 font-heading font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr
                      key={feature.name}
                      className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-muted/20' : ''}`}
                    >
                      <td className="p-6 font-medium">{feature.name}</td>
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
                            <Check className="w-5 h-5 text-accent mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )
                        ) : (
                          <span className="text-accent font-medium">{feature.enterprise}</span>
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
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="font-heading font-semibold pr-8">{faq.question}</span>
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
    </main>
  );
};

export default Pricing;
