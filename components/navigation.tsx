'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
    { href: '/terms', label: 'Terms' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity "
          >
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="SunWizard AI Logo"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg hidden sm:inline bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SunWizard AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full hover:shadow-lg transition-all font-medium text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX size={24} className="text-foreground" />
            ) : (
              <FiMenu size={24} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-up">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
