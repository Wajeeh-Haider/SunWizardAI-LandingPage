import Link from 'next/link';
import Image from 'next/image';
import {
  FiMail,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-foreground to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/logo.png"
                  alt="SunWizard AI"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SunWizard AI
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your personal sun protection assistant powered by cutting-edge AI
              technology.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-white flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full"></div>
              Product
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Features
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Pricing
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Download App
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-white flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full"></div>
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Terms & Conditions
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-white flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full"></div>
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <FiMail size={16} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:info@sunwizard.ai"
                  className="hover:text-primary transition-colors"
                >
                  info@sunwizard.ai
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-white flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full"></div>
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <FiTwitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} SunWizard AI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
