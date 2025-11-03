'use client';

import type React from 'react';
import { useState } from 'react';
import {
  FiMail,
  FiSend,
  FiCheckCircle,
  FiArrowRight,
  FiAlertCircle,
  FiLoader,
} from 'react-icons/fi';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    // Clear API error when user makes changes
    if (apiError) {
      setApiError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setApiError('');

    try {
      const response = await fetch(
        'https://prod-api.sunwizard.ai/api/support/web',
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Success
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setApiError(
        error instanceof Error
          ? `Failed to send message: ${error.message}`
          : 'Failed to send message. Please try again later.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Get in Touch
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {[
                {
                  icon: FiMail,
                  title: 'Email',
                  value: 'info@sunwizard.ai',
                  detail: 'We typically respond within 24 hours',
                  color: 'from-orange-400 to-orange-600',
                },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={index}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-foreground font-medium">
                      {contact.value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {contact.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Contact Form */}
            <div
              className="lg:col-span-2 animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-border focus:ring-primary'
                      }`}
                      placeholder="Your name"
                      disabled={isLoading}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <FiAlertCircle size={14} />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-border focus:ring-primary'
                      }`}
                      placeholder="your@email.com"
                      disabled={isLoading}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <FiAlertCircle size={14} />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border focus:ring-primary'
                    }`}
                    placeholder="How can we help?"
                    disabled={isLoading}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <FiAlertCircle size={14} />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message *{' '}
                    <span className="text-xs text-muted-foreground">
                      ({formData.message.length}/1000)
                    </span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border focus:ring-primary'
                    }`}
                    placeholder="Tell us more..."
                    disabled={isLoading}
                    maxLength={1000}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <FiAlertCircle size={14} />
                      {errors.message}
                    </p>
                  )}
                </div>

                {apiError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 flex items-center gap-2">
                    <FiAlertCircle size={20} />
                    {apiError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <FiLoader className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>

                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center gap-2 animate-slide-up">
                    <FiCheckCircle size={20} />
                    Thank you! We've received your message and will get back to
                    you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center animate-slide-up">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do I download the app?',
                a: 'You can download SunWizard AI from the Google Play Store. Search for "SunWizard AI" to find it.',
              },
              {
                q: 'Is my location data secure?',
                a: 'Yes, we use industry-standard encryption and never share your location data with third parties. See our privacy policy for details.',
              },
              {
                q: 'Can I use the app offline?',
                a: 'The app requires an internet connection for real-time UV data, but you can view previously cached information offline.',
              },
              {
                q: 'How accurate are the recommendations?',
                a: 'Our recommendations are based on dermatological research and AI analysis of your skin type, location, and activities.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-border hover:shadow-md transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <FiArrowRight className="text-primary" size={20} />
                  {faq.q}
                </h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
