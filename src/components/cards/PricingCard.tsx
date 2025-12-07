import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  name: string;
  price: { monthly: number; yearly: number };
  description: string;
  features: string[];
  popular?: boolean;
  isYearly: boolean;
  delay?: number;
}

export const PricingCard = ({
  name,
  price,
  description,
  features,
  popular = false,
  isYearly,
  delay = 0,
}: PricingCardProps) => {
  const currentPrice = isYearly ? price.yearly : price.monthly;
  const savings = isYearly ? Math.round((price.monthly * 12 - price.yearly) / 12) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative ${popular ? 'lg:-mt-4' : ''}`}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="px-4 py-1.5 rounded-full text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`cyber-card p-8 h-full flex flex-col ${
          popular
            ? 'cyber-border-glow border-primary/30'
            : 'border-accent/20 hover:border-primary/30 hover:cyber-glow'
        } transition-all duration-300`}
      >
        {/* Header */}
        <div className="mb-8">
          <h3 className="font-heading font-bold text-2xl mb-2 text-foreground">{name}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-heading font-bold gradient-text">
              ${currentPrice}
            </span>
            <span className="text-muted-foreground">/month</span>
          </div>
          {isYearly && savings > 0 && (
            <p className="text-secondary text-sm mt-2">
              Save ${savings}/mo with yearly billing
            </p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8 flex-1">
          {features.map((feature, index) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + index * 0.08 }}
              className="flex items-start gap-3"
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                popular ? 'bg-primary/20 border border-primary/30' : 'bg-secondary/15 border border-secondary/25'
              }`}>
                <Check className={`w-3 h-3 ${popular ? 'text-primary' : 'text-secondary'}`} />
              </div>
              <span className="text-foreground/80">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/contact"
          className={popular ? 'btn-primary text-center' : 'btn-secondary text-center'}
        >
          Get Started
        </Link>
      </div>
    </motion.div>
  );
};
