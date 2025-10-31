'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Apple, Play } from 'lucide-react';
import {
  FiArrowRight,
  FiShield,
  FiZap,
  FiUsers,
  FiTrendingUp,
  FiClock,
  FiCheckCircle,
  FiBarChart2,
  FiAward,
  FiMapPin,
  FiMessageSquare,
} from 'react-icons/fi';
import { useState } from 'react';

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: FiMapPin,
      title: 'Real-time UV Monitoring',
      description:
        'Location-based UV index tracking with daily forecasts and severity indicators.',
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: FiZap,
      title: 'AI-Powered Recommendations',
      description:
        'Personalized sunscreen suggestions based on your skin type and activities.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: FiClock,
      title: 'Smart Reminders',
      description:
        'Customizable notifications for initial application and reapplication alerts.',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: FiShield,
      title: 'Skin Analysis',
      description: 'Optional photo analysis for personalized protection plans.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: FiTrendingUp,
      title: 'Protection History',
      description: 'Track your sun exposure and protection patterns over time.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: FiUsers,
      title: 'Expert Guidance',
      description:
        'AI chatbot for personalized sun protection advice and recommendations.',
      color: 'from-pink-400 to-pink-600',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Health Enthusiast',
      text: 'SunWizard AI has completely changed how I approach sun protection. The personalized recommendations are spot-on!',
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Outdoor Athlete',
      text: 'As someone who spends hours outdoors, the real-time UV monitoring is invaluable. Never missed a reapplication reminder.',
      avatar: 'MC',
    },
    {
      name: 'Emma Davis',
      role: 'Parent',
      text: 'I love that I can protect my kids with science-backed recommendations. The app makes it so easy!',
      avatar: 'ED',
    },
  ];

  const stats = [
    { label: 'Active Users', value: '50K+', icon: FiUsers },
    { label: 'UV Alerts Sent', value: '2M+', icon: FiZap },
    { label: 'Skin Scans', value: '100K+', icon: FiBarChart2 },
    { label: 'Expert Rating', value: '4.9/5', icon: FiAward },
  ];

  const iosUrl = process.env.NEXT_PUBLIC_IOS_URL || '/contact';
  const playUrl = process.env.NEXT_PUBLIC_PLAY_URL || '/contact';

  return (
    <main className="bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-secondary opacity-5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <Image
              src="/images/logo.png"
              alt="SunWizard AI"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-accent bg-opacity-10 rounded-full border border-accent border-opacity-20 animate-slide-up">
            <span className="text-white font-semibold text-sm flex items-center gap-2">
              <FiZap size={16} /> Protect Your Skin with AI
            </span>
          </div>

          {/* Main Heading with Integrated Slogan */}
          <div className="mb-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
              Your Personal{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sun Protection
              </span>{' '}
              Assistant
            </h1>
            {/* Slogan as elegant subtitle */}
            <div className="flex items-center justify-center gap-3 text-2xl md:text-2xl font-light text-muted-foreground">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50"></div>
              Every Ray, Every Day
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50"></div>
            </div>
          </div>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up mb-16"
            style={{ animationDelay: '0.2s' }}
          >
            Smart UV monitoring and AI-powered sunscreen recommendations to keep
            your skin healthy, protected, and glowing every single day.
          </p>

          {/* Store download badges (Hero) */}
          <div
            className="flex justify-center gap-4 -mt-12 md:-mt-8 mb-16 animate-slide-up"
            style={{ animationDelay: '0.35s' }}
          >
            <Link
              href={iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-white text-foreground hover:shadow-lg transition-all"
            >
              <Apple className="w-5 h-5" />
              <span className="text-sm font-semibold">App Store</span>
            </Link>
            <Link
              href={playUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-white text-foreground hover:shadow-lg transition-all"
            >
              <Play className="w-5 h-5" />
              <span className="text-sm font-semibold">Google Play</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 animate-slide-up">
              <span className="text-accent font-semibold text-sm flex items-center gap-2">
                <FiZap size={16} /> Modern App Dashboard
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up"
              style={{ animationDelay: '0.05s' }}
            >
              A Sleek, Phone-First Experience
            </h2>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              Designed for clarity and everyday usability. The areas below are
              reserved for your phone screenshots to complete the look.
            </p>
            {/* Store download badges */}
            <div
              className="flex justify-center gap-4 mt-8 animate-slide-up"
              style={{ animationDelay: '0.15s' }}
            >
              <Link
                href={iosUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-white text-foreground hover:shadow-lg transition-all"
              >
                <Apple className="w-5 h-5" />
                <span className="text-sm font-semibold">App Store</span>
              </Link>
              <Link
                href={playUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-white text-foreground hover:shadow-lg transition-all"
              >
                <Play className="w-5 h-5" />
                <span className="text-sm font-semibold">Google Play</span>
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Text + Bento Cards */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {/* UV Today */}
                <div
                  className="p-6 bg-white rounded-2xl border border-border hover:shadow-xl transition-all animate-slide-up"
                  style={{ animationDelay: '0.12s' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <FiZap className="text-white" size={20} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      Today’s UV
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Live index with hourly trends for proactive protection.
                  </p>
                </div>

                {/* Reminders */}
                <div
                  className="p-6 bg-white rounded-2xl border border-border hover:shadow-xl transition-all animate-slide-up"
                  style={{ animationDelay: '0.15s' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                      <FiClock className="text-white" size={20} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      Smart Reminders
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Personalized application and reapplication alerts for your
                    routine.
                  </p>
                </div>

                {/* Plan */}
                <div
                  className="p-6 bg-white rounded-2xl border border-border hover:shadow-xl transition-all animate-slide-up"
                  style={{ animationDelay: '0.18s' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                      <FiShield className="text-white" size={20} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      Protection Plan
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI-guided recommendations tailored to your skin and
                    activity.
                  </p>
                </div>

                {/* History */}
                <div
                  className="p-6 bg-white rounded-2xl border border-border hover:shadow-xl transition-all animate-slide-up"
                  style={{ animationDelay: '0.21s' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <FiTrendingUp className="text-white" size={20} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      Protection History
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Track habits and see your progress toward healthier skin.
                  </p>
                </div>

                {/* Insights */}
                <div
                  className="p-6 bg-white rounded-2xl border border-border hover:shadow-xl transition-all animate-slide-up"
                  style={{ animationDelay: '0.24s' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                      <FiBarChart2 className="text-white" size={20} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      Weekly Insights
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Understand trends and get tips to improve protection.
                  </p>
                </div>

                {/* Profiles */}
                <div
                  className="p-6 bg-white rounded-2xl border border-border hover:shadow-xl transition-all animate-slide-up"
                  style={{ animationDelay: '0.27s' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center">
                      <FiUsers className="text-white" size={20} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      Profiles
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Manage preferences for yourself and family members.
                  </p>
                </div>
              </div>

              <div
                className="mt-10 animate-slide-up"
                style={{ animationDelay: '0.3s' }}
              >
                <Link
                  href="#download"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all group"
                >
                  Explore the Dashboard
                  <FiArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            {/* Phone Showcase (reserved for images) */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative flex justify-center lg:justify-end">
                {/* Background glow */}
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

                <div className="relative flex items-center gap-6">
                  {/* Primary phone mockup */}
                  <div
                    className="relative w-[220px] h-[460px] md:w-[260px] md:h-[520px] overflow-hidden animate-slide-up"
                    style={{ animationDelay: '0.12s' }}
                  >
                    <Image
                      src="/images/dashboard-mockup-one.png"
                      alt="SunWizard Dashboard mockup"
                      fill
                      sizes="(max-width: 768px) 100vw, 260px"
                      className="object-contain bg-transparent "
                      priority
                    />
                  </div>

                  {/* Secondary phone mockup (offset) */}
                  <div
                    className="relative w-[190px] h-[400px] md:w-[220px] md:h-[460px] overflow-hidden rotate-3 -translate-y-4 animate-slide-up"
                    style={{ animationDelay: '0.18s' }}
                  >
                    <Image
                      src="/images/dashboard-mockup-2.png"
                      alt="SunWizard Dashboard mockup alternate"
                      fill
                      sizes="(max-width: 768px) 100vw, 220px"
                      className="object-contain bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 animate-slide-up">
              <span className="text-primary font-semibold text-sm flex items-center gap-2">
                <FiMessageSquare size={16} /> SunWizard Chatbot
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up"
              style={{ animationDelay: '0.05s' }}
            >
              Your Personal Skin Guidance, 24/7
            </h2>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              Ask anything about sun protection, skincare routines, sunscreen
              types, and UV safety. Phone image area below is left blank for
              your screenshots.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Phone chat showcase (reserved for images) */}
            <div className="lg:col-span-6">
              <div className="relative flex justify-center">
                <div className="absolute -top-6 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-6 -left-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

                <div className="relative flex items-center gap-6">
                  {/* Primary phone placeholder */}
                  <div
                    className="relative w-[220px] h-[460px] md:w-[260px] md:h-[520px] overflow-hidden animate-slide-up"
                    style={{ animationDelay: '0.12s' }}
                  >
                    <Image
                      src="/images/chatbot-mockup-one.png"
                      alt="SunWizard Chatbot mockup"
                      fill
                      sizes="(max-width: 768px) 100vw, 260px"
                      // remove white bg from image
                      className="object-contain rounded-[2rem] bg-transparent"
                      priority
                    />
                  </div>
                  {/* Secondary phone placeholder */}
                  <div
                    className="relative w-[190px] h-[400px] md:w-[220px] md:h-[460px] overflow-hidden -rotate-3 -translate-y-4 animate-slide-up"
                    style={{ animationDelay: '0.18s' }}
                  >
                    <Image
                      src="/images/chatbot-mockup-two.png"
                      alt="SunWizard Chatbot mockup alternate"
                      fill
                      sizes="(max-width: 768px) 100vw, 220px"
                      className="object-contain bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Chatbot features */}
            <div className="lg:col-span-6">
              <div className="space-y-5">
                {[
                  {
                    icon: FiMessageSquare,
                    title: 'Personalized Skin Advice',
                    desc: 'Guidance tailored to your skin type and lifestyle.',
                  },
                  {
                    icon: FiShield,
                    title: 'Sun-Safe Routines',
                    desc: 'Daily routines for optimal protection and healthy glow.',
                  },
                  {
                    icon: FiZap,
                    title: 'Product Recommendations',
                    desc: 'Sunscreen and skincare suggestions backed by best practices.',
                  },
                  {
                    icon: FiTrendingUp,
                    title: 'UV Risk Insights',
                    desc: 'Understand local UV risk and how to respond.',
                  },
                  {
                    icon: FiClock,
                    title: 'Timely Reminders',
                    desc: 'Ask for reapplication timers and schedule notifications.',
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-border hover:border-primary transition-all animate-slide-up"
                      style={{ animationDelay: `${0.14 + idx * 0.05}s` }}
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className="mt-8 animate-slide-up"
                style={{ animationDelay: '0.38s' }}
              >
                <Link
                  href="#download"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all group"
                >
                  Ask SunWizard
                  <FiArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to protect your skin from harmful UV rays with
              cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-white rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-xl cursor-pointer group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Learn more</span>
                    <FiArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to get started with personalized sun protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Download',
                description: 'Get the SunWizard AI app from your app store',
              },
              {
                step: 2,
                title: 'Setup Profile',
                description: 'Tell us about your skin type and preferences',
              },
              {
                step: 3,
                title: 'Get Alerts',
                description: 'Receive real-time UV alerts and recommendations',
              },
              {
                step: 4,
                title: 'Stay Protected',
                description: 'Follow personalized sun protection advice',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-1 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Users Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of people protecting their skin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-border animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Choose SunWizard AI?
              </h2>
              <div className="space-y-4">
                {[
                  'AI-powered personalized recommendations',
                  'Real-time UV index monitoring',
                  'Smart reminder system',
                  'Skin health tracking',
                  'Expert dermatologist insights',
                  'Privacy-first approach',
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <FiCheckCircle className="text-white" size={16} />
                    </div>
                    <span className="text-foreground font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <FiShield size={64} className="mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Protect Your Skin Today
                </h3>
                <p className="text-white opacity-90 mb-6">
                  Join thousands of users who have already improved their sun
                  protection habits with SunWizard AI.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-primary px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
