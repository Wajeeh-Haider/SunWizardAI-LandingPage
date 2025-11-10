'use client';

import type React from 'react';
import { useState } from 'react';
import {
  FiMail,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
} from 'react-icons/fi';
import Link from 'next/link';

interface FormData {
  email: string;
  reason: string; // why do you want to use the app
}

interface FormErrors {
  email?: string;
  reason?: string;
}

export default function RequestAccess() {
  const [formData, setFormData] = useState<FormData>({ email: '', reason: '' });
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

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Reason validation
    if (!formData.reason.trim()) {
      newErrors.reason = 'Please tell us why you want access';
    } else if (formData.reason.trim().length < 10) {
      newErrors.reason = 'Please provide at least 10 characters';
    } else if (formData.reason.trim().length > 1000) {
      newErrors.reason = 'Please keep it under 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    // Clear API error when user makes changes
    if (apiError) setApiError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setApiError('');

    try {
      // Use the same API endpoint as contact, but set our own subject
      const response = await fetch(
        'https://prod-api.sunwizard.ai/api/support/web',
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // Name is not collected in this form; provide a sensible default
            name: 'Beta Access Request',
            email: formData.email.trim(),
            // Subject is set programmatically, not from user input
            subject: 'Request Access: Beta Program',
            // Include the user-provided reason and a helpful prefix
            message: `User requests beta access. Reason: ${formData.reason.trim()}`,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // const result = await response.json(); // not used now

      // Success
      setSubmitted(true);
      setFormData({ email: '', reason: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting request:', error);
      setApiError(
        error instanceof Error
          ? `Failed to send request: ${error.message}`
          : 'Failed to send request. Please try again later.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">
            Request Access
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            We are currently in beta testing and are looking for collaborators
            to provide feedback on our app. Please fill out the form below to
            get access.
          </p>
        </div>
      </section>

      {/* Request Access Form Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Info Card */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <FiMail className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Beta Program
              </h3>
              <p className="text-sm text-muted-foreground">
                Submit your email and a short note on why you want to use the
                app. We’ll reach out as soon as we expand access.
              </p>
              <p className="text-xs text-muted-foreground">
                Privacy-first. We only use your email to share access.
              </p>
            </div>

            {/* Form */}
            <div
              className="lg:col-span-2 animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Why do you want to use the app? *{' '}
                    <span className="text-xs text-muted-foreground">
                      ({formData.reason.length}/1000)
                    </span>
                  </label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.reason
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border focus:ring-primary'
                    }`}
                    placeholder="Tell us a bit about your use case..."
                    disabled={isLoading}
                    maxLength={1000}
                  />
                  {errors.reason && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <FiAlertCircle size={14} />
                      {errors.reason}
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
                      Request Access
                    </>
                  )}
                </button>

                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center gap-2 animate-slide-up">
                    <FiCheckCircle size={20} />
                    Thank you! We’ve added your email to our beta access list
                    and will share the app with you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Help Link */}
      <section className="py-12 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Prefer to reach us directly?{' '}
            <Link
              href="/contact"
              className="text-primary font-medium hover:underline"
            >
              Contact support
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
