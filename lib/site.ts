export const siteConfig = {
  name: 'AI Software for Information Analysis',
  url: process.env.SITE_URL ?? 'https://example.com',
  email: 'contact@example.com',
  githubUrl: 'https://github.com/IFAKA/landing',
  description:
    'AI-powered software that helps users organize, analyze and understand publicly available information through intuitive web applications.',
} as const;

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Product', href: '#product' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Legal', href: '#legal' },
] as const;

export const aboutItems = [
  'We develop AI web applications for information organization, analysis, and review workflows.',
  'We build SaaS products, developer tools, digital products, and productivity software.',
  'Our software supports human review and helps users understand publicly available information through intuitive web applications.',
] as const;

export const notProvidedItems = [
  'Investment advice',
  'Brokerage services',
  'Money transmission',
  'Gambling',
  'Financial services',
  'Legal advice',
  'Medical advice',
] as const;

export const productPoints = [
  'Customers purchase software subscriptions for access to AI-powered web applications.',
  'Access is delivered digitally through software accounts or web-based product access only.',
  'Optional support may be available for product usage, onboarding, and account questions.',
] as const;

export const faqs = [
  {
    question: 'What do you sell?',
    answer: 'AI-powered software products.',
  },
  {
    question: 'Do you provide financial advice?',
    answer: 'No.',
  },
  {
    question: 'Do you manage customer funds?',
    answer: 'No.',
  },
  {
    question: 'Can users purchase physical products?',
    answer: 'No. Everything sold is digital software.',
  },
] as const;

export const legalPoints = [
  'Privacy Policy: we do not sell personal information.',
  'Payments: secure payment processing is handled through Stripe.',
  'Privacy Policy: we operate with GDPR-compliant data handling practices for applicable users.',
  'Terms of Service: users purchase access to software only.',
  'Terms of Service: we make no guarantees regarding business or financial outcomes.',
] as const;
