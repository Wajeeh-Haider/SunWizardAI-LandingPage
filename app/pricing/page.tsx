'use client';

import Link from 'next/link';
import DownloadCTA from '@/components/download-cta';
import { FiCheck, FiArrowRight, FiZap } from 'react-icons/fi';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started',
      features: [
        'Real-time UV monitoring',
        'Basic sunscreen recommendations',
        'Daily UV forecasts',
        'Standard reminders',
        'Limited skin analysis',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Monthly',
      price: '$5',
      period: '/month',
      description: 'Full access to premium sun protection features',
      features: [
        'Everything in Free',
        'Advanced skin analysis',
        'Unlimited personalized recommendations',
        'Priority notifications',
        'Ad-free experience',
        'Protection history & analytics',
        'Expert AI chatbot access',
        'Custom protection plans',
      ],
      cta: 'Start 1-Month Free',
      highlighted: true,
    },
  ];

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Simple, Transparent Pricing
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            Choose the perfect plan for your sun protection needs. All plans
            include our core UV monitoring features.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all border-2 animate-slide-up ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-primary to-accent text-white border-primary shadow-2xl scale-105'
                    : 'bg-white border-border hover:border-primary'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlighted ? 'text-white' : 'text-foreground'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mb-6 ${
                    plan.highlighted
                      ? 'text-white opacity-90'
                      : 'text-muted-foreground'
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span
                    className={`text-5xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-foreground'
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={
                        plan.highlighted
                          ? 'text-white opacity-90'
                          : 'text-muted-foreground'
                      }
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                <Link
                  href="#download"
                  className={`block w-full py-3 rounded-lg font-semibold text-center mb-8 transition-all flex items-center justify-center gap-2 group ${
                    plan.highlighted
                      ? 'bg-white text-primary hover:shadow-lg'
                      : 'bg-primary text-white hover:bg-opacity-90'
                  }`}
                >
                  {plan.cta}{' '}
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <FiCheck
                        size={20}
                        className={`flex-shrink-0 ${
                          plan.highlighted ? 'text-white' : 'text-primary'
                        }`}
                      />
                      <span
                        className={
                          plan.highlighted ? 'text-white' : 'text-foreground'
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center animate-slide-up">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I cancel my subscription anytime?',
                a: 'Yes, you can cancel your subscription at any time with no penalties or hidden fees.',
              },
              {
                q: 'Is there a free trial for the Monthly plan?',
                a: 'Yes, your first month is free. You can start without commitment.',
              },
              {
                q: 'How does the 1-month free trial work?',
                a: 'Your first month is free. Cancel anytime before the trial ends to avoid charges. After the trial, billing is $20/month.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, Apple Pay, Google Pay, and PayPal.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-border hover:shadow-md transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <FiZap className="text-primary" size={20} />
                  {faq.q}
                </h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA above footer */}
    </main>
  );
}
