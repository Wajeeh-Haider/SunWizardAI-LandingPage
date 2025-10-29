"use client"

import Link from "next/link"
import Image from "next/image"
import {
  FiArrowRight,
  FiShield,
  FiZap,
  FiUsers,
  FiTrendingUp,
  FiClock,
  FiCheckCircle,
  FiSmartphone,
  FiBarChart2,
  FiAward,
  FiMapPin,
} from "react-icons/fi"
import { useState } from "react"

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const features = [
    {
      icon: FiMapPin,
      title: "Real-time UV Monitoring",
      description: "Location-based UV index tracking with daily forecasts and severity indicators.",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: FiZap,
      title: "AI-Powered Recommendations",
      description: "Personalized sunscreen suggestions based on your skin type and activities.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: FiClock,
      title: "Smart Reminders",
      description: "Customizable notifications for initial application and reapplication alerts.",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: FiShield,
      title: "Skin Analysis",
      description: "Optional photo analysis for personalized protection plans.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: FiTrendingUp,
      title: "Protection History",
      description: "Track your sun exposure and protection patterns over time.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: FiUsers,
      title: "Expert Guidance",
      description: "AI chatbot for personalized sun protection advice and recommendations.",
      color: "from-pink-400 to-pink-600",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Health Enthusiast",
      text: "SunWizard AI has completely changed how I approach sun protection. The personalized recommendations are spot-on!",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Outdoor Athlete",
      text: "As someone who spends hours outdoors, the real-time UV monitoring is invaluable. Never missed a reapplication reminder.",
      avatar: "MC",
    },
    {
      name: "Emma Davis",
      role: "Parent",
      text: "I love that I can protect my kids with science-backed recommendations. The app makes it so easy!",
      avatar: "ED",
    },
  ]

  const stats = [
    { label: "Active Users", value: "50K+", icon: FiUsers },
    { label: "UV Alerts Sent", value: "2M+", icon: FiZap },
    { label: "Skin Scans", value: "100K+", icon: FiBarChart2 },
    { label: "Expert Rating", value: "4.9/5", icon: FiAward },
  ]

  return (
    <main className="bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-secondary opacity-5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <Image src="/images/logo.png" alt="SunWizard AI" width={80} height={80} className="mx-auto" />
          </div>

          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-accent bg-opacity-10 rounded-full border border-accent border-opacity-20 animate-slide-up">
            <span className="text-accent font-semibold text-sm flex items-center gap-2">
              <FiZap size={16} /> Protect Your Skin with AI
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Your Personal{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sun Protection
            </span>{" "}
            Assistant
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Smart UV monitoring and AI-powered sunscreen recommendations to keep your skin healthy, protected, and
            glowing every single day.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              Download App <FiArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
            >
              Learn More
            </Link>
          </div>

          {/* Hero Image */}
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 border border-border animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-xl h-80 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
              </div>
              <div className="text-center text-white relative z-10">
                <FiSmartphone size={80} className="mx-auto mb-4 animate-bounce-slow" />
                <p className="text-2xl font-bold">App Preview</p>
                <p className="text-sm opacity-90 mt-2">Coming Soon</p>
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
              const Icon = stat.icon
              return (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to protect your skin from harmful UV rays with cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
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
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Learn more</span>
                    <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to get started with personalized sun protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Download", description: "Get the SunWizard AI app from your app store" },
              { step: 2, title: "Setup Profile", description: "Tell us about your skin type and preferences" },
              { step: 3, title: "Get Alerts", description: "Receive real-time UV alerts and recommendations" },
              { step: 4, title: "Stay Protected", description: "Follow personalized sun protection advice" },
            ].map((item, index) => (
              <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Users Say</h2>
            <p className="text-xl text-muted-foreground">Join thousands of people protecting their skin</p>
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
                <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose SunWizard AI?</h2>
              <div className="space-y-4">
                {[
                  "AI-powered personalized recommendations",
                  "Real-time UV index monitoring",
                  "Smart reminder system",
                  "Skin health tracking",
                  "Expert dermatologist insights",
                  "Privacy-first approach",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <FiCheckCircle className="text-white" size={16} />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <FiShield size={64} className="mb-6" />
                <h3 className="text-2xl font-bold mb-4">Protect Your Skin Today</h3>
                <p className="text-white opacity-90 mb-6">
                  Join thousands of users who have already improved their sun protection habits with SunWizard AI.
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Protect Your Skin?</h2>
          <p className="text-xl mb-8 opacity-90">
            Download SunWizard AI today and start getting personalized sun protection recommendations powered by AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              Download Now <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
