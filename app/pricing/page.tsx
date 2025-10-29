"use client"

import Link from "next/link"
import { FiCheck, FiArrowRight, FiZap } from "react-icons/fi"
import { useState } from "react"

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly")

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: [
        "Real-time UV monitoring",
        "Basic sunscreen recommendations",
        "Daily UV forecasts",
        "Standard reminders",
        "Limited skin analysis",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Premium",
      price: billingPeriod === "monthly" ? "$9.99" : "$99.99",
      period: billingPeriod === "monthly" ? "/month" : "/year",
      description: "For serious sun protection",
      features: [
        "Everything in Free",
        "Advanced skin analysis",
        "Unlimited personalized recommendations",
        "Priority notifications",
        "Ad-free experience",
        "Protection history & analytics",
        "Expert AI chatbot access",
        "Custom protection plans",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Family",
      price: billingPeriod === "monthly" ? "$14.99" : "$149.99",
      period: billingPeriod === "monthly" ? "/month" : "/year",
      description: "Protect your whole family",
      features: [
        "Everything in Premium",
        "Up to 5 family members",
        "Individual profiles & tracking",
        "Family protection dashboard",
        "Shared UV alerts",
        "Priority customer support",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
  ]

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
            style={{ animationDelay: "0.1s" }}
          >
            Choose the perfect plan for your sun protection needs. All plans include our core UV monitoring features.
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center gap-4 mt-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                billingPeriod === "monthly"
                  ? "bg-primary text-white"
                  : "bg-white text-foreground border-2 border-border"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                billingPeriod === "annual" ? "bg-primary text-white" : "bg-white text-foreground border-2 border-border"
              }`}
            >
              Annual <span className="text-xs bg-accent px-2 py-1 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all border-2 animate-slide-up ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-primary to-accent text-white border-primary shadow-2xl scale-105"
                    : "bg-white border-border hover:border-primary"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.highlighted ? "text-white opacity-90" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={plan.highlighted ? "text-white opacity-90" : "text-muted-foreground"}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <Link
                  href="/contact"
                  className={`block w-full py-3 rounded-lg font-semibold text-center mb-8 transition-all flex items-center justify-center gap-2 group ${
                    plan.highlighted
                      ? "bg-white text-primary hover:shadow-lg"
                      : "bg-primary text-white hover:bg-opacity-90"
                  }`}
                >
                  {plan.cta} <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <FiCheck
                        size={20}
                        className={`flex-shrink-0 ${plan.highlighted ? "text-white" : "text-primary"}`}
                      />
                      <span className={plan.highlighted ? "text-white" : "text-foreground"}>{feature}</span>
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
                q: "Can I cancel my subscription anytime?",
                a: "Yes, you can cancel your subscription at any time with no penalties or hidden fees.",
              },
              {
                q: "Is there a free trial for Premium?",
                a: "Yes, all Premium plans come with a 7-day free trial. No credit card required to start.",
              },
              {
                q: "Do you offer discounts for annual subscriptions?",
                a: "Yes, annual subscriptions receive a 20% discount compared to monthly billing.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, Apple Pay, Google Pay, and PayPal.",
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
    </main>
  )
}
