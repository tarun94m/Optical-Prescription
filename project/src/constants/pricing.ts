export const pricingPlans = [
  {
    name: 'Starter',
    price: '29',
    features: [
      '1,000 AI operations/month',
      'Basic analytics',
      'Email support',
      '2 team members',
    ],
  },
  {
    name: 'Pro',
    price: '99',
    features: [
      '10,000 AI operations/month',
      'Advanced analytics',
      'Priority support',
      '10 team members',
      'Custom integrations',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '299',
    features: [
      'Unlimited AI operations',
      'Custom AI models',
      '24/7 phone support',
      'Unlimited team members',
      'Advanced security',
      'SLA guarantee',
    ],
  },
] as const;